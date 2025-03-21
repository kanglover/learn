/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // 思路：自身以外数组的乘积 = 这个数左边的所有数乘积 * 这个数右边的所有数乘积
    const left = [];
    let leftSum = 1;
    for (let i = 0; i < nums.length; i++) {
        left[i] = leftSum;
        leftSum *= nums[i];
    }

    const right = [];
    const rightSum = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        right[i] = rightSum;
        rightSum *= nums[i];
    }

    const res = [];
    for (let i = 0; i < nums.length; i++) {
        res[i] = left[i] * right[i];
    }

    return res;
};
// @lc code=end

