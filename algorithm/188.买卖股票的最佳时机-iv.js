/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    // i 天，最大交易 k，未持有股票 = max(i - 1 天不操作，卖出)
    // dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
    // i 天，最大交易 k，持有股票 = max(i - 1)
    // dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);

    const len = prices.length;
    const dp = new Array(len).fill(0).map(_ => new Array(k + 1).fill(0).map(_ => [0, 0]));
    // k = Math.min(k, Math.floor(n / 2));

    for (let i = 0; i < len; i++) {
        for (let j = k; j >= 1; j--) {
            if (i === 0) {
                dp[i][k][0] = 0;
                dp[i][k][1] = -prices[0];
                continue;
            }

            dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
            dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
        }
    }

    return dp[len - 1][k][0];
};
// @lc code=end

