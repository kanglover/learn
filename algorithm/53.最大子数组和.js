/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const dp = new Array(nums.length + 1).fill(0);

    dp[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
    }

    let max = -Infinity;
    for (let i = 0; i < dp.length; i++) {
        max = Math.max(dp[i], max);
    }
    return max;
};
// @lc code=end

