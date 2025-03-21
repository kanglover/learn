/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const track = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                track.push([i, j]);
            }
        }
    }

    track.forEach(item => {
        const [i, j] = item;
        for (let row = 0; row < m; row++) {
            matrix[row][j] = 0;
        }

        for (let col = 0; col < n; col++) {
            matrix[i][col] = 0;
        }
    });

    return matrix;
};
// @lc code=end

