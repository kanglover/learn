/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const isSortedNums = [...nums].sort((a, b) => a - b);

    let left = 0, right = nums.length - 1;

    while (nums[left] === isSortedNums[left]) {
        left++;
    }

    while (nums[right] === isSortedNums[right]) {
        right--;
    }

    return right - left + 1;
};
// @lc code=end

