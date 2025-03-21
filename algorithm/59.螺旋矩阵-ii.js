/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let top = 0, bottom = n - 1, left = 0, right = n - 1;

    let num = 1;
    const ans = new Array(n).fill().map(() => new Array(n));
    while (top <= bottom && left <= right) {
        for (let col = left; col <= right; col++) {
            ans[top][col] = num++;
        }

        for (let row = top + 1; row <= bottom; row++) {
            ans[row][right] = num++;
        }

        for (let col = right - 1; col > left; col--) {
            ans[bottom][col] = num++;
        }

        for (let row = bottom; row > top; row--) {
            ans[row][left] = num++;
        }

        [top, bottom, left, right] = [top + 1, bottom - 1, left + 1, right - 1];
    }
    return ans;
};
// @lc code=end

