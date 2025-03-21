/*
 * @lc app=leetcode.cn id=1696 lang=javascript
 *
 * [1696] 跳跃游戏 VI
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
    const dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];

    const queue = [0];

    for (let i = 1; i < nums.length; i++) {
        dp[i] = dp[queue[0]] + nums[i];
        while (queue.length && dp[queue[queue.length - 1]] <= dp[i]) {
            queue.pop();
        }

        queue.push(i);

        if (queue[0] === i - k) {
            queue.shift();
        }
    }

    return dp[nums.length - 1];
};
// @lc code=end

