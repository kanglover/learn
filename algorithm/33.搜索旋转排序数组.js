/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // 升序，前一半是有序的
        if (nums[start] <= nums[mid]) {
            if (target >= nums[start] && target <= nums[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        // 后一半是有序的
        else {
            if (target >= nums[mid] && target <= nums[end]) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }
    return -1;
};
// @lc code=end

