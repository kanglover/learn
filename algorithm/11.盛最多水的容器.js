/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    var start = 0, end = height.length - 1;
    while (start < end) {
        max = Math.max(max, Math.min(height[end], height[start]) * (end - start));
        height[start] < height[end] ? start++ : end--;
    }
    return max;
};
// @lc code=end

