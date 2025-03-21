/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }

    const pow = Math.abs(n);

    const floor = Math.floor(pow / 2);

    const result = (pow % 2 !== 0) ? x * myPow(x * x, floor) : myPow(x * x, floor);

    return n < 0 ? 1 / result : result;
};
// @lc code=end

