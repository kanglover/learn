/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length <= 1) {
        return true;
    }
    let longest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        longest = Math.max(longest, i + nums[i]);

        // 最大距离都已经比当前小，说明跳不过去
        if (longest <= i) {
            return false;
        }

        if (longest >= nums.length - 1) {
            return true;
        }
    }

    return false;
};
// @lc code=end

