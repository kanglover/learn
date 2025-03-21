/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    const backtrack = (n) => {
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                if (board[row][col] !== '.') {
                    continue;
                }

                for (let i = 1; i <= 9; i++) {
                    const c = i.toString();
                    if (!isValid(board, row, col, c)) {
                        continue;
                    }

                    board[row][col] = c;
                    if (backtrack(n)) {
                        return true;
                    }
                    board[row][col] = '.';
                }

                return false;
            }
        }

        return true;
    };

    backtrack(board.length);
};

var solveSudoku = function (board) {
    const m = 9, n = 9;

    const backtrack = (board, i, j) => {
        if (j === n) {
            return backtrack(board, i + 1, 0);
        }

        // 所以数都填完了
        if (i === m) {
            return true;
        }

        if (board[i][j] !== '.') {
            return backtrack(board, i, j + 1);
        }

        for (let num = 1; num <= 9; num++) {
            const candidate = num + '';
            if (!isValid(board, i, j, candidate)) {
                continue;
            }

            board[i][j] = candidate;
            if (backtrack(board, i, j + 1)) {
                return true;
            }
            // 回溯
            board[i][j] = '.';
        }

        return false;
    };

    backtrack(board, 0, 0);
};


var isValid = function (board, row, col, n) {
    // 分开判断
    /* for (let i = 0; i < 9; i++) {
        if (board[row][i] === n) {
            return false;
        }

        if (board[i][col] === n) {
            return false;
        }
    }

    for(let i = startRow; i < startRow + 3; i++) {
        for(let j = startCol; j < startCol + 3; j++) {
            if(board[i][j] === val) {
                return false
            }
        }
    } */

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === n) {
            return false;
        }

        if (board[i][col] === n) {
            return false;
        }

        const curRow = startRow + Math.floor(i / 3); // startRow + 0、0、0、1、1、1...
        const curCol = startCol + Math.floor(i % 3); // startCol + 0、1、2...
        if (board[curRow][curCol] === n) {
            return false;
        }
    }
    return true;
}
// @lc code=end

