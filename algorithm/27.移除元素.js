/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length;) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        }
        else {
            i++;
        }
    }
    return nums.length;
};

var removeElement = function(nums, val) {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== val) {
            nums[slow++] = nums[fast];
        }
    }
    return slow;
}
// @lc code=end

