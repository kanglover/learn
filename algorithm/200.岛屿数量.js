/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }

    return count;
};

const dfs = function(grid, i, j) {
    const m = grid.length;
    const n = grid[0].length;
    if (i < 0 || j < 0 || i >= m || j >= n) {
        return;
    }

    if (grid[i][j] === '0') {
        return;
    }

    grid[i][j] = '0';

    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}

// @lc code=end

