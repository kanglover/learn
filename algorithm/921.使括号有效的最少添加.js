/*
 * @lc app=leetcode.cn id=921 lang=javascript
 *
 * [921] 使括号有效的最少添加
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let open = 0, close = 0;

    for (let c of S) {
        if (c === '(') {
            open++;
        }
        else if (open > 0) {
            open--;
        } else {
            close++;
        }
    }
    return open + close;
};
// @lc code=end


var minAddToMakeValid = function(s) {
    let need = 0, res = 0;
    for (let c of s) {
        if (c === '(') {
            need++;
        }

        if (c === ')') {
            need--;

            if (need === -1) {
                res++;
                need = 0;
            }
        }
    }
    return need + res;
}
