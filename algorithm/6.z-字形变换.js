/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
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

    const row = new Array(numRows).fill('');
    let count = 0;
    let reverse = false;
    for (let i = 0; i < s.length; i++) {
        row[count] += s[i];
        reverse ? count-- : count++;
        if (count === numRows - 1 || count === 0) {
            reverse = !reverse;
        }
    }

    return row.reduce((pre, cur) => pre + cur);
};
// @lc code=end

var convert = function (s, numRows) {
    const rows = Array.from(numRows).fill('');
    let count = 0;
    let reverse = true;

    for (let i = 0; i < s.length; i++) {
        rows[count] += s[i];
        reverse ? count++ : count--;

        if (count === numRows - 1 || count === 0) {
            reverse = !reverse;
        }
    }

    return rows.reduce((pre, cur) => pre + cur);
}

