/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const res = [];
    const len = nums.length - 1;

    let left = 0, right = len;
    while (left <= right) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            res.unshift(nums[left] * nums[left]);
            left++;
        }
        else {
            res.unshift(nums[right] * nums[right])
            right--;
        }
    }
    return res;
};
// @lc code=end

