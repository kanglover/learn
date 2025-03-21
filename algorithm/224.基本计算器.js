/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let sign = 1;
    let sum = 0;
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (isDigit(char)) {
            let num = parseInt(char);
            while (isDigit(s[i + 1])) {
                num = (num * 10) + parseInt(s[i + 1]);
                i += 1;
            }
            sum += (num * sign);
        }
        else if (char === '+') {
            sign = 1;
        }
        else if (char === '-') {
            sign = -1;
        }
        else if (char === '(') {
            stack.push(sum);
            stack.push(sign);
            sum = 0;
            sign = 1;
        }
        else if (char === ')') {
            const o = stack.pop();
            sum = o * sum;
            sum += stack.pop();
        }
    }

    return sum;
};

var isDigit = char => char >= '0' && char <= '9';
// @lc code=end

