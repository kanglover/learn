/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0, right = nums.length - 1;

    for (let i = 0; i <= right; i++) {
        // 如果 2 和 2 交换了，需要换到 right-- 的位置
        while (nums[i] === 2 &&  i <= right) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        }

        if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
        }
    }
    return nums;
};
// @lc code=end

