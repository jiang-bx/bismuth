/**
 * 暴力解法
 * @param board
 * @returns
 */
export function isValidSudoku1(board: string[][]): boolean {
    const m = new Map<string, number>();

    // 水平遍历
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            // 行值
            const rowVal = board[i][j];

            // 列值
            const columnVal = board[j][i];

            if (board[i][j] === ".") {
                continue;
            }
            if (m.has(board[i][j])) {
                return false;
            }
            m.set(board[i][j], 1);
        }
        m.clear();
    }

    m.clear();

    // 垂直遍历
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][i] === ".") {
                continue;
            }
            if (m.has(board[j][i])) {
                return false;
            }
            m.set(board[j][i], 1);
        }
        m.clear();
    }

    // 3 * 3 范围内判断是否有
    for (let i = 0; i < board.length; i += 3) {
        for (let j = 0; j < board.length; j += 3) {
            for (let l = i; l < i + 3; l++) {
                for (let k = j; k < j + 3; k++) {
                    if (board[l][k] === ".") {
                        continue;
                    }
                    if (m.has(board[l][k])) {
                        return false;
                    }
                    m.set(board[l][k], 1);
                }
            }
            m.clear();
        }
    }

    return true;
}

/**
 * 暴力解法 - 优化
 * @param board
 * @returns
 */
export function isValidSudoku2(board: string[][]): boolean {
    const mRow = new Map<string, number>();
    const mColumn = new Map<string, number>();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            // 行值
            const rowVal = board[i][j];
            // 列值
            const columnVal = board[j][i];
            if (rowVal !== ".") {
                if (mRow.has(rowVal)) {
                    return false;
                }
                mRow.set(rowVal, 1);
            }

            if (columnVal !== ".") {
                if (mColumn.has(columnVal)) {
                    return false;
                }
                mColumn.set(columnVal, 1);
            }
        }
        mRow.clear();
        mColumn.clear();
    }

    mRow.clear();
    mColumn.clear();

    // 3 * 3 范围内判断是否有
    for (let i = 0; i < board.length; i += 3) {
        for (let j = 0; j < board.length; j += 3) {
            for (let l = i; l < i + 3; l++) {
                for (let k = j; k < j + 3; k++) {
                    if (board[l][k] === ".") {
                        continue;
                    }
                    if (mRow.has(board[l][k])) {
                        return false;
                    }
                    mRow.set(board[l][k], 1);
                }
            }
            mRow.clear();
        }
    }

    mRow.clear();

    return true;
}

/**
 * 暴力解法 - 继续优化 - 内存消耗过大
 * @param board
 * @returns
 */
export function isValidSudoku3(board: string[][]): boolean {
    // 为 每行, 每列, 每个 3*3 的矩阵都创建一个map

    const row = new Array(9).fill(0).map(() => new Map<string, boolean>());
    const col = new Array(9).fill(0).map(() => new Map<string, boolean>());
    const box = new Array(9).fill(0).map(() => new Map<string, boolean>());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const ch = board[i][j];

            if (ch === ".") {
                continue;
            }

            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (row[i].has(ch) || col[j].has(ch) || box[boxIndex].has(ch)) {
                return false;
            }

            row[i].set(ch, true);
            col[j].set(ch, true);
            box[boxIndex].set(ch, true);
        }
    }

    return true;
}

/**
 * 暴力解法 -  最终优化
 * @param board
 * @returns
 */
export function isValidSudoku(board: string[][]): boolean {
    const row = new Map<string, boolean>();
    const col = new Map<string, boolean>();
    const box = new Map<number, Map<string, boolean>>();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const rowVal = board[i][j];
            const columnVal = board[j][i];

            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (!box.has(boxIndex)) {
                box.set(boxIndex, new Map());
            }

            const curBox = box.get(boxIndex);

            if (row.has(rowVal) || col.has(columnVal) || curBox.has(rowVal)) {
                return false;
            }

            if (rowVal !== ".") {
                row.set(rowVal, true);
                curBox.set(rowVal, true);
            }

            if (columnVal !== ".") {
                col.set(columnVal, true);
            }
        }
        row.clear();
        col.clear();
    }

    return true;
}
