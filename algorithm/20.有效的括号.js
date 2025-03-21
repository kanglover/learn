/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const map = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    for (const x of s) {
        if (x in map) {
            stack.push(x);
        }
        else if (map[stack.pop()] !== x) {
            return false;
        }
    }
    return !stack.length;
};
// @lc code=end

