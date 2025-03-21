/*
 * @lc app=leetcode.cn id=918 lang=javascript
 *
 * [918] 环形子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let maxSum = nums[0], curMax = nums[0];
    let minSum = nums[0], curMin = nums[0];
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxSum = Math.max(maxSum + nums[i], nums[i]);
        curMax = Math.max(curMax, maxSum);

        minSum = Math.min(minSum + nums[i], nums[i]);
        curMin = Math.min(curMin, minSum);

        sum += nums[i];
    }

    return curMax > 0 ? (Math.max(curMax, sum - curMin)) : curMax;
};
// @lc code=end

