/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};

var searchInsert = function(nums, target) {
    var left = 0, right = nums.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return left;
};

// @lc code=end

