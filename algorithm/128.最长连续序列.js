/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let max = 0;

    for (const num of nums) {
        if (!set.has(num - 1)) {
            const curNum = num;
            const len = 1;
            while (set.has(curNum + 1)) {
                len++;
                curNum++;
            }

            max = Math.max(len, max);
        }
    }

    return max;
};
// @lc code=end

