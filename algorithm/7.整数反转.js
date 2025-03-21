/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const absReversed = Math.abs(x).toString().split('').reverse().join('');
    if (absReversed > 2**31) return 0;
    return absReversed * Math.sign(x);
};
// @lc code=end

