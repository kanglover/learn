/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let target = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            target = nums[i];
            count++;
        }
        else if (nums[i] === target) {
            count++;
        }
        else {
            count--;
        }
    }
    return target;
};
// @lc code=end

