/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const rows = matrix.length, columns = matrix[0].length;
    let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
    const order = [];

    while (left <= right && top <= bottom) {
        for (let col = left; col <= right; col++) {
            order.push(matrix[top][col]);
        }

        for (let row = top + 1; row <= bottom; row++) {
            order.push(matrix[row][right]);
        }

        // 这里需要判断：[[3], [2]]
        if (left < right && top < bottom) {
            for (let col = right - 1; col > left; col--) {
                order.push(matrix[bottom][col]);
            }

            for (let row = bottom; row > top; row--) {
                order.push(matrix[row][left]);
            }
        }

        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return order;
};
// @lc code=end

