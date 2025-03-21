/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
    // dp[i][k][1] = Math.max(dp[i - 1][k][1], d[i - 1][k - 1][0] - prices[i]);

    // dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i]);
    // dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][0] - prices[i]);
    // dp[i][2][0] = Math.max(dp[i - 1][2][0], dp[i - 1][2][1] + prices[i]);
    // dp[i][2][1] = Math.max(dp[i - 1][2][1], dp[i - 1][1][0] - prices[i]);

    let dpi_1_0 = 0;
    let dpi_1_1 = -Infinity;
    let dpi_2_0 = 0;
    let dpi_2_1 = -Infinity;
    for (let i = 0; i < prices.length; i++) {
        dpi_1_0 = Math.max(dpi_1_0, dpi_1_1 + prices[i]);
        // dpi_1_1 = Math.max(dpi_1_1, dpi_0_0 - prices[i]);
        dpi_1_1 = Math.max(dpi_1_1, -prices[i]);
        dpi_2_0 = Math.max(dpi_2_0, dpi_2_1 + prices[i]);
        dpi_2_1 = Math.max(dpi_2_1, dpi_1_0 - prices[i]);
    }
    return dpi_2_0;
};
// @lc code=end

