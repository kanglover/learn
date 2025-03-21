/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let [start, end] = newInterval;
    let left = [], right = [];
    for (let interval of intervals) {
        const [first, last] = interval;

        if (last < start) {
            left.push(interval);
        }
        else if (first > end) {
            right.push(interval);
        }
        else {
            start = Math.min(start, first);
            end = Math.max(end, last);
        }
    }

    return [...left, [start, end], ...right];
};
// @lc code=end

