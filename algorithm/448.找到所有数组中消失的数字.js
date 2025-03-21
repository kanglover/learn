/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] *= -1;
        }
    }

    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }

    return res;
};

var findDisappearedNumbers = function(nums) {
    const len = nums.length;
    for (let i = 0; i < nums.length; i++) {
        let index = (nums[i] - 1) % len;
        nums[index] += len;
    }

    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > len) {
            res.push(i + 1);
        }
    }

    return res;
};
// @lc code=end

