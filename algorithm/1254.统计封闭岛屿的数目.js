/*
 * @lc app=leetcode.cn id=1254 lang=javascript
 *
 * [1254] 统计封闭岛屿的数目
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // 把边缘的土地淹没
    for (let i = 0; i < m; i++) {
        dfs(grid, i, 0);
        dfs(grid, i, n - 1);
    }

    for (let j = 0; j < n; j++) {
        dfs(grid, 0, j);
        dfs(grid, m - 1, j);
    }

    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                count++;
                dfs(grid, i, j);
            }
        }
    }

    return count;
};

function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
        return;
    }

    if (grid[i][j] === 1) {
        return;
    }

    grid[i][j] = 1;
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}
// @lc code=end

