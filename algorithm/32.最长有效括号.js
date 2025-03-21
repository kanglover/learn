/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const len = s.length;
    if (len === 0) {
        return 0;
    }

    const dp = new Array(len).fill(0);

    const stack = [];
    for (let i = 0; i < len; i++) {
        if (s[i] === '(') {
            stack.push(i);
            dp[i + 1] = 0;
        }
        else {
            if (stack.length) {
                const leftIndex = stack.pop();
                dp[i + 1] = i - leftIndex + 1 + dp[leftIndex];
            }
            else {
                dp[i + 1] = 0;
            }
        }
    }

    let max = 0;
    for (let i = 0; i <= len; i++) {
        max = Math.max(dp[i], max);
    }

    return max;
};

var longestValidParentheses = function(s) {
    let maxLen = 0;
    const stack = [-1];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        }
        else {
            stack.pop();

            if (stack.length === 0) {
                stack.push(i);
            }
            else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLen;
}
// @lc code=end
