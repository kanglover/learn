/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b) => a - b);

    let min = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                return sum;
            }

            if (Math.abs(sum - target) < Math.abs(min - target)) {
                min = sum;
            }

            if (sum < target) {
                left++;
            }
            else {
                right--;
            }
        }
    }

    return min;
};
// @lc code=end

