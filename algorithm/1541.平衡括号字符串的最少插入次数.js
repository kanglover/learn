/*
 * @lc app=leetcode.cn id=1541 lang=javascript
 *
 * [1541] 平衡括号字符串的最少插入次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let res = 0, need = 0;

    for (const char of s) {
        if (char === '(') {
            need = need + 2;
            if (need % 2 === 1) {
                // 插入一个右括号
                res++;
                need--;
            }
        }

        if (char === ')') {
            need--;

            if (need === -1) {
                // 需要插入一个左括号
                res++;
                need = 1;
            }
        }
    }
};
// @lc code=end

