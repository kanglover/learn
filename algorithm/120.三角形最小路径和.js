/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // dp[i][j] = triangle[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1]);

    const m = triangle.length, n = triangle[m - 1].length;
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    let ans = Infinity;

    dp[0][0] = triangle[0][0];
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j === triangle[i - 1].length) {
                dp[i][j] = triangle[i][j] + dp[i - 1][j - 1];
            }
            else if (j === 0) {
                dp[i][j] = triangle[i][j] + dp[i - 1][j];
            }
            else {
                dp[i][j] = triangle[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1]);
            }
        }
    }

    for (let j = 0; j < triangle[m - 1].length; j++) {
        ans = Math.min(ans, dp[m - 1][j]);
    }

    return ans;
};
// @lc code=end

