/**
 * @see https://leetcode.cn/problems/count-subarrays-where-max-element-appears-at-least-k-times/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const maxNum = Math.max(...nums);
    let ans = 0;
    let left = 0, right = 0;
    let n = nums.length;
    let count = 0;

    while (right < n) {
        if (nums[right] === maxNum) {
            count++;
        }

        while (count === k) {
            // 以 [left, right] 为前缀
            ans += n - right;

            if (nums[left++] === maxNum) {
                count--;
            }
        }
        right++;
    }

    return ans;
};


var countSubarrays = function(nums, k) {
    const maxNum = Math.max(...nums);
    let ans = 0;
    let left = 0, right = 0;
    let n = nums.length;
    let count = 0;

    while (right < n) {
        if (nums[right] === maxNum) {
            count++;
        }

        while (count === k) {
            if (nums[left++] === maxNum) {
                count--;
            }
        }
        // 以 [left, right] 为后缀
        ans += left;
        right++;
    }

    return ans;
};