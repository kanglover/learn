/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let curMax = nums[0];
    let curMin = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let prevMax = curMax;
        let prevMin = curMin;
        // 分开判断，num[i] 如果是正数或者是负数的情况
        curMax = Math.max(prevMax * nums[i], nums[i], prevMin * nums[i]);
        curMin = Math.min(prevMin * nums[i], nums[i], prevMax * nums[i]);

        max = Math.max(max, curMax);
    }

    return max;
};
// @lc code=end

