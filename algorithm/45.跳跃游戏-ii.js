/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0;
    let end = 0;
    let longest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        longest = Math.max(i + nums[i], longest);

        if (i === end) {
            jumps++;
            end = longest;
        }
    }
    return jumps;
};

// @lc code=end

