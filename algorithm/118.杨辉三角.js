/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const arr = [[1]];
    if (numRows === 1) {
        return arr;
    }

    for (let i = 1; i < numRows; i++) {
        const row = [1];
        for (let j = 1; j < arr[i - 1].length; j++) {
            row.push(arr[i - 1][j - 1] + arr[i - 1][j]);
        }
        row.push(1);
        arr.push(row);
    }
    return arr;
};
// @lc code=end

