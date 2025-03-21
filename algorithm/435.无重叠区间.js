/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((pre, cur) => pre[1] - cur[1]);

    let end = intervals[0][1];
    let count = 0;

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            count++;
        }
        else {
            end = intervals[i][1];
        }
    }

    return count;
};
// @lc code=end

