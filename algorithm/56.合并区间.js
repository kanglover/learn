/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);

    let mergeIntervals = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const last = mergeIntervals[mergeIntervals.length - 1];
        const cur = intervals[i];
        if (cur[0] <= last[1]) {
            last[1] = Math.max(cur[1], last[1]);
        }
        else {
            mergeIntervals.push(cur);
        }
    }
    return mergeIntervals;
};
// @lc code=end

