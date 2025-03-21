/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    for (var i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

var climbStairs = function(n) {
    function fib(n, memo = []) {
        if (n === 1) {
            return 1;
        }

        if (n === 2) {
            return 2;
        }

        if (memo[n]) {
            return memo[n];
        }

        memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
        return memo[n];
    }
    return fib(n);
};
// @lc code=end

