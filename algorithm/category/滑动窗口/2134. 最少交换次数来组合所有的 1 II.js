/**
 * @see https://leetcode.cn/problems/minimum-swaps-to-group-all-1s-together-ii/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const count = nums.reduce((a, b) => a + b);
    const n = nums.length;
    let sum = 0;
    let ans = 0;
    for (let i = 0; i < n + count; i++) {
        sum += nums[i % n];

        if (i < count - 1) {
            continue;
        }

        // 算出窗口内 1 最多的数量
        ans = Math.max(ans, sum);
        sum -= nums[(i - count + 1) % n];
    }

    // 1 的总数 - 窗口内 1 最多的数 = 需要交换的数量
    return count - ans;
};