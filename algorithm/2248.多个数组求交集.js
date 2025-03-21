/*
 * @lc app=leetcode.cn id=2248 lang=javascript
 *
 * [2248] 多个数组求交集
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
    if (arrays.length === 0) return [];

    // 使用 reduce 逐步求交集
    return arrays.reduce((acc, currArray) => {
        return acc.filter(item => currArray.includes(item));
    });
};
// @lc code=end

