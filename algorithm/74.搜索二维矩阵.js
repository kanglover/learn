/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length;
    let column = matrix[0].length;
    let left = 0;
    let right = row * column - 1;

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        let midValue = matrix[Math.floor(mid / column)][mid % column];

        if (midValue === target) {
            return true;
        }
        else if (midValue < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return false;
};
// @lc code=end

