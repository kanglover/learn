/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    let res = [];

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (char === '+' || char === '-' || char === '*') {
            const left = diffWaysToCompute(expression.substring(0, i));
            const right = diffWaysToCompute(expression.substring(i + 1));

            for (let j = 0; j < left.length; j++) {
                for (let k = 0; k < right.length; k++) {
                    if (char === '+') {
                        res.push(left[j] + right[k]);
                    }
                    else if (char === '-') {
                        res.push(left[j] - right[k]);
                    }
                    else {
                        res.push(left[j] * right[k]);
                    }
                }
            }
        }
    }

    if (res.length === 0) {
        res.push(parseInt(expression));
    }

    return res;
};
// @lc code=end

