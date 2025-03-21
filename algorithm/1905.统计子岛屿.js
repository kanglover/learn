/*
 * @lc app=leetcode.cn id=1905 lang=javascript
 *
 * [1905] 统计子岛屿
 */

// @lc code=start
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    const m = grid1.length;
    const n = grid1[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid1[i][j] === 0 && grid2[i][j] === 1) {
                dfs(grid2, i, j);
            }
        }
    }

    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] === 1) {
                count++;
                dfs(grid2, i, j);
            }
        }
    }
    return count;
};

function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
        return;
    }

    if (grid[i][j] === 0) {
        return;
    }

    grid[i][j] = 0;

    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}
// @lc code=end

