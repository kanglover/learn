/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    const dfs = (l, r, s) => {
        if (l === n && r === n) {
            res.push(s);
        }

        if (l > n) {
            return;
        }

        if (l < n) {
            dfs(l + 1, r, s + '(');
        }

        if (r < l) {
            dfs(l, r + 1, s + ')');
        }
    }
    dfs(0, 0, '');
    return res;
};
// @lc code=end

