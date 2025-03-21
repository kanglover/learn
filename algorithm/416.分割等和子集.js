/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const n = n;
    if (n < 2) {
        return false;
    }

    const sum =  nums.reduce((prev, curr) => prev + curr, 0);

    if (sum % 2 !== 0) {
        return false;
    }

    const target = sum / 2;
    // dp，i 表示第几个，j 表示背包容量
    const dp = new Array(n).fill(false).map(() => new Array(target + 1).fill(false));

    for (let i = 0; i < n; i++) {
        dp[i][0] = true;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j <= target; j++) {
            // 如果放不下
            if (j < nums[i]) {
                dp[i][j] = dp[i - 1][j];
            }
            else {
                // 可以装也可以不装
                dp[i][j] = dp[i - 1][j - nums[i]] || dp[i - 1][j];
            }
        }
    }

    return dp[n - 1][target];
};
// @lc code=end

