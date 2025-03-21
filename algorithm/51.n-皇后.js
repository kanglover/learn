/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let res = [];
    const board = new Array(n).fill('.').map(() => new Array(n).fill('.'));

    const isValid = (board, row, col) => {
        let n = board.length;
        // 检查列是否有皇后互相冲突
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        // 检查右上方是否有皇后互相冲突
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        // 检查左上方是否有皇后互相冲突
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    };

    const copyArr = board => {
        let arr = [];
        for (let i = 0; i < board.length; i++) {
            arr.push(board[i].join(''));
        }
        return arr;
    };

    const backtrack = (row, board) => {
        if (row === n) {
            res.push(copyArr(board));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (!isValid(board, row, col)) {
                continue;
            }

            board[row][col] = 'Q';
            backtrack(row + 1, board);
            board[row][col] = '.';
        }
    };

    backtrack(0, board);
    return res;
};
// @lc code=end
