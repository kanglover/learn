/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length < numRows) {
        return s;
    }

    const ans = new Array(numRows).fill('');

    let i = 0;
    let row = 0;
    let reverse = true;
    while (i < s.length) {
        ans[row] += s[i++];

        if (row === 0 || row === numRows - 1) {
            reverse = !reverse;
        }

        if (reverse) {
            row--;
        }
        else {
            row++;
        }
    }

    return ans.join('');
};
// @lc code=end

