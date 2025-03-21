/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const n = grid.length, m = grid[0].length;

    const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));
    dp[0][0] = grid[0][0];

    for (let i = 1; i < n; i++) {
        dp[i][0] += grid[i - 1][0];
    }

    for (let j = 1; j < m; j++) {
        dp[0][j] += grid[0][j - 1];
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp[m - 1][n - 1];
};
// @lc code=end

