/**
 * @file 实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，x^n ）
 */

var myPow = function (x, n) {
    if (n === 0) {
        return 1;
    }

    if (n === 1) {
        return x;
    }

    const pow = Math.abs(n);
    const half = Math.floor(pow / 2);
    const result = pow % 2 === 0 ? myPow(x * x, half) : x * myPow(x * x, half);
    return n < 0 ? 1 / result : result;
};
