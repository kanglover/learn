/**
 * @file promise 对象
 * @see https://github.com/qiruohan/article/blob/master/promise/promise.js
 * https://github.com/ab690257072/web-base-zhuawa/blob/master/01_promise/MyPromise.js
 * @author sk
 */
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

function resolvePromise(promise, x, resolve, reject) {
    // 如果 promise 和 x 指向同一对象，拒绝执行 promise。原因是为了防止死循环
    if (promise === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
    }

    // 只能调用一次
    let called;
    if ((typeof x === 'object' && x != null) || typeof x === 'function') {
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) {
                        return;
                    }
                    called = true;
                    resolvePromise(promise, y, resolve, reject);
                }, r => {
                    if (called) {
                        return;
                    }
                    called = true;
                    reject(r);
                });
            }
            else {
                resolve(x);
            }
        }
        catch (e) {
            if (called) {
                return;
            }
            called = true;
            reject(e);
        }
    }
    // x 是个普通值
    else {
        resolve(x);
    }
}


class Promise {
    constructor(executor) {
        // 默认状态
        this.status = PENDING;
        // 成功状态的值
        this.value = undefined;
        // 失败状态的值
        this.reason = undefined;
        // 存放成功的回调
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        let resolve = value => {
            if (this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        };

        let reject = reason => {
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };

        try {
            executor(resolve, reject);
        }
        catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        // onFulfilled、onRejected 未传值的情况
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function'
            ? onRejected
            : reason => {
                throw reason;
            };

        let thenPromise = new Promise((resolve, reject) => {
            if (this.status === FULFILLED) {
                // setTimeout 模拟异步。用 queueMicrotask 更好
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value);
                        resolvePromise(thenPromise, x, resolve, reject);
                    }
                    catch (e) {
                        reject(e);
                    }
                }, 0);
            }

            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason);
                        resolvePromise(thenPromise, x, resolve, reject);
                    }
                    catch (e) {
                        reject(e);
                    }
                });
            }

            // 如果状态为 PENDING，暂时把回调保存起来
            if (this.status === PENDING) {
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value);
                            resolvePromise(thenPromise, x, resolve, reject);
                        }
                        catch (e) {
                            reject(e);
                        }
                    });
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason);
                            resolvePromise(thenPromise, x, resolve, reject);
                        }
                        catch (e) {
                            reject(e);
                        }
                    });
                });
            }
        });

        return thenPromise;
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    finally(cb) {
        return this.then(
            value => Promise.resolve(cb()).then(() => value),
            reason => Promise.resolve(cb()).then(() => {
                throw reason;
            })
        );
    }

    static resolve(value) {
        // 若已经是promise，则幂等返回
        if (value instanceof Promise) {
            return value;
        }
        return new Promise((resolve, reject) => {
            resolve(value);
        });
    }

    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason);
        });
    }

    static all(promises) {
        return new Promise((resolve, reject) => {
            if (!promises || typeof promises[Symbol.iterator] !== 'function') {
                return reject(new TypeError('arguments must be iterable'));
            }
            const len = promises.length;
            const result = [];

            if (len === 0) {
                return resolve(result);
            }
            let counter = 0;

            promises.forEach((value, index) => {
                Promise.resolve(value).then(value => {
                    counter++;
                    // 不能用push，因为结果顺序与参数一一对应
                    result[index] = value;
                    // 等待所有结果成功返回
                    if (counter === len) {
                        resolve(result);
                    }
                })
                .catch(reason => {
                    reject(reason);
                });
            });
        });
    }

    static race(promises) {
        return new Promise((resolve, reject) => {
            const len = promises.length;
            if (len === 0) {
                resolve(); // 无数据时直接返回一个空promise
            }
            else {
                for (let i = 0; i < len; i++) {
                    Promise.resolve(promises[i]).then(value => {
                        resolve(value); // 只要有某项解决就将结果解决
                    }, reason => {
                        reject(reason); // 只要有某项拒绝就将结果拒绝
                    });
                }
            }
        });
    }
}
