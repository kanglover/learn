/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    let max = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                max = Math.max(max, dfs(grid, i, j));
            }
        }
    }

    return max;
};

function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
        return 0;
    }

    if (grid[i][j] === 0) {
        return 0;
    }

    grid[i][j] = 0;

    return dfs(grid, i + 1, j)
        + dfs(grid, i - 1, j)
        + dfs(grid, i, j + 1)
        + dfs(grid, i, j - 1)
        + 1;
}

// @lc code=end

