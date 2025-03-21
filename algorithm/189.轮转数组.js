/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;

    const reverse = function (i , j) {
        while(i < j) {
            [num[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }

    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
};
// @lc code=end

