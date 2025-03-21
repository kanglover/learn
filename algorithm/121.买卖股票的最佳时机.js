/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;
    let maxProfit = 0;

    for (let right = 1; right < prices.length; right++) {
        if (prices[left] < prices[right]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
        }
        else {
            left = right;
        }
    }
    return maxProfit;
};
// @lc code=end

