export function solveSudoku1(board: string[][]): void {
    const backtrack = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] != ".") {
                    continue;
                }

                // 尝试将 1 ~ 9 依次填入
                for (let k = 1; k <= 9; k++) {
                    // 判断是否符合
                    if (isValid(i, j, k + "")) {
                        board[i][j] = k + "";

                        // 递归判断是否成功
                        if (backtrack()) {
                            return true;
                        }

                        // 回溯, 撤回填入的数字
                        board[i][j] = ".";
                    }
                }

                return false;
            }
        }

        return true;
    };

    const isValid = (row: number, col: number, val: string) => {
        // 判断行是否重复
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === val) {
                return false;
            }
        }

        // 判断列是否重复
        for (let j = 0; j < 9; j++) {
            if (board[j][col] === val) {
                return false;
            }
        }

        // 判断 3 * 3 的矩阵是否重复
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === val) {
                    return false;
                }
            }
        }
        return true;
    };

    backtrack();
}

/**
 * 回溯时, 不在从 0,0 开始
 * @param board
 */
export function solveSudoku(board: string[][]): void {
    // 记录行
    const rowUsed = new Array(9).fill(0).map(() => new Array(9).fill(false));

    // 记录列 填充情况
    const colUsed = new Array(9).fill(0).map(() => new Array(9).fill(false));

    // 记录 3 * 3 矩阵
    const boxUsed = new Array(3)
        .fill(0)
        .map(() => new Array(3).fill(0).map(() => new Array(9).fill(false)));

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == ".") {
                continue;
            }

            const num = Number(board[i][j]);

            rowUsed[i][num] = true;
            colUsed[j][num] = true;
            boxUsed[Math.floor(i / 3)][Math.floor(j / 3)][num] = true;
        }
    }

    // 开始回溯

    const backtrack = (row: number, col: number) => {
        // 边界确定
        if (col === board.length) {
            col = 0;
            row++;
            if (row === board.length) {
                return true;
            }
        }

        // 尝试填充下一个
        if (board[row][col] !== ".") {
            return backtrack(row, col + 1);
        }

        // 尝试填充 1 ~ 9
        for (let k = 1; k <= 9; k++) {
            // 判断当前 数字能否填充
            const boxRow = Math.floor(row / 3);
            const boxCol = Math.floor(col / 3);

            // 只要上述记录有一个存在, 就不能填充
            if (
                rowUsed[row][k] ||
                colUsed[col][k] ||
                boxUsed[boxRow][boxCol][k]
            ) {
                continue;
            }

            // 如果可以填充的话

            // 记录填充
            rowUsed[row][k] = true;
            colUsed[col][k] = true;
            boxUsed[boxRow][boxCol][k] = true;

            // 填充当前 k
            board[row][col] = k + "";

            // 继续递归, 看下一个填充是否符合
            if (backtrack(row, col + 1)) {
                return true;
            }

            // 不符合, 回溯, 将记录值复原
            rowUsed[row][k] = false;
            colUsed[col][k] = false;
            boxUsed[boxRow][boxCol][k] = false;

            // 填充当前 k
            board[row][col] = ".";
        }

        return false;
    };

    backtrack(0, 0);
}
