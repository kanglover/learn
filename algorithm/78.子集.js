/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    // 记录走过的路径
    var backtrack = function(nums, start, track) {
        res.push([...track]);
        for (let i = start; i < nums.length; i++) {
            // 做选择
            track.push(nums[i]);
            // 回溯
            backtrack(nums, i + 1, track);
            // 撤销选择
            track.pop();
        }
    }

    backtrack(nums, 0, []);
    return res;
};
// @lc code=end

