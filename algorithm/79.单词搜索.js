/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                // 判断一下 true 再返回
                if (bfs(board, word, i, j, 0)) {
                    return true;
                }
            }
        }
    }

    return false;
};

const bfs = function(board, word, i, j, len) {
    if (len === word.length) {
        return true;
    }

    const m = board.length;
    const n = board[0].length;
    if (i < 0 || i >= m || j < 0 || j >= n) {
        return false;
    }

    if (board[i][j] !== word[len]) {
        return false;
    }

    const temp = board[i][j];
    board[i][j] = '-';
    const res = bfs(board, word, i + 1, j, len + 1)
        || bfs(board, word, i - 1, j, len + 1)
        || bfs(board, word, i, j + 1, len + 1)
        || bfs(board, word, i, j - 1, len + 1);
    board[i][j] = temp;
    return res;
}
// @lc code=end

