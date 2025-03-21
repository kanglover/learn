/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const queue = [];
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
            queue.pop();
        }

        queue.push(i);

        if (queue[0] === i - k) {
            queue.shift();
        }

        if (i >= k - 1) {
            ans.push(nums[queue[0]]);
        }
    }

    return ans;
};
// @lc code=end

