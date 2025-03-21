/**
 * @see https://leetcode.cn/problems/subarray-product-less-than-k/description/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    const n = nums.length;
    let left = 0, right = 0;
    let ans = 0;
    let prod = 1;
    while (right < n) {
        prod *= nums[right];

        while (prod >= k) {
            prod /= nums[left++];
        }
        ans += right - left + 1;
        right++;
    }
    return ans;
};