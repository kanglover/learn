/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if (k >= num.length) {
        return '0';
    }

    const stack = [];
    for (let n of num) {
        while (stack.length && n < stack[stack.length - 1] && k) {
            stack.pop();
            k--;
        }
        stack.push(n);
    }

    while (k--) {
        stack.pop();
    }

    if (!stack.length) {
        return '0';
    }

    return parseInt(stack.join('')) + '';
};
// @lc code=end

