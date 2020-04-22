/**
 * @file
 * @author 邵康
*/


/**
 * 创建一个 EventEmitter 类，用于事件的监听和触发进行通信
 *
 * @class
 */
class EventEmitter {
    constructor() {
        // 创建一个干净的 events 对象
        this._events = Object.create(null);
    }
    // 监听 event 事件
    on(type, handler) {
        (this._events[type] || (this._events[type] = [])).push(handler);

        // 等价
        // let callbacks = this._events[type] || [];
        // this._events[type] = callbacks.push(handler);
        // return this;
    }
    // 解除监听
    off(type, handler) {
        if (this._events[type]) {
            this._events[type].splice(
                // >>> 0 表示无符号右移0位，正数不变，负数会变成很大的正数
                this._events[type].indexOf(handler) >>> 0, 1
            );
        }

        // 等价
        // let callbacks = this._events[type];
        // this._events[type] =  callbacks && callbacks.filter(function(fn){
        //        return fn !== handler;
        // })
        // return this;
    }
    // 注册单次监听器，触发一次后立即移除
    once(type, handler) {
        let fired = false;
        function magic(...args) {
            this.off(type, magic);
            if (!fired) {
                fired = true;
                handler.apply(this, args);
            }
        }
        this.on(type, magic);

        // 等价
        // let wrap = (...args) => {
        //     handler.apply(this, args)
        //     this.off(event, wrap)
        // }
        // this.on(event, wrap)
        // return this
    }
    // 触发事件
    emit(type, ...args) {
        // let payload = [].slice.call(arguments, 1);

        let array = this._events[type] || [];
        for (let i = 0; i < array.length; i++) {
            let handler = this._event[type][i];
            // handler.apply(this, payload);
            handler.apply(this, args);
        }

        // 等价
        // const callbacks = this._events[type]
        // callbacks.forEach(fn => fn.apply(this.payload))
        // return this
    }
}
