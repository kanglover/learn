/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let k = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2] || nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

var removeDuplicates = function(nums) {
    const n = nums.length;
    if (n <= 2) {
        return n;
    }
    let slow = 2, fast = 2;
    while (fast < n) {
        if (nums[slow - 2] != nums[fast]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};
// @lc code=end
