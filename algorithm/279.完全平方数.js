/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = new Array(n + 1).fill(Infinity);
    for (let i = 1; i < n; i++) {
        for (let j = Math.floor(Math.sqrt(i)); j >= 1; j--) {
            dp[i] = Math.min(dp[i - j * j] + 1, dp[i]);
        }
    }
    return dp[n];
};
// @lc code=end

