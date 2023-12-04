export function gameOfLife(board: number[][]): void {
    /** 方法一: 暴力解法, 利用额外的内存空间
    const m = board.length;
    const n = board[0].length;
    const res = [];
    const calcLivingCell = (i: number, j: number): number => {
        let liveNumber = 0;
        let top = i - 1 <= 0 ? 0 : i - 1;
        let right = j + 1 >= n - 1 ? n - 1 : j + 1;
        let bottom = i + 1 >= m - 1 ? m - 1 : i + 1;
        let left = j - 1 <= 0 ? 0 : j - 1;

        for (let l = top; l <= bottom; l++) {
            for (let k = left; k <= right; k++) {
                if (l === i && k === j) {
                    continue;
                }
                if (board[l][k] === 1) {
                    liveNumber++;
                }
            }
        }

        return liveNumber;
    };

    for (let i = 0; i < m; i++) {
        const arr = [];
        for (let j = 0; j < n; j++) {
            // 周围八个位置活细胞数量,
            const liveNum = calcLivingCell(i, j);
            if (board[i][j] === 1) {
                if (liveNum < 2) {
                    arr.push(0);
                } else if (liveNum === 2 || liveNum === 3) {
                    arr.push(1);
                } else if (liveNum > 3) {
                    arr.push(0);
                }
            } else {
                if (liveNum === 3) {
                    arr.push(1);
                } else {
                    arr.push(0);
                }
            }
        }
        res.push(arr);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = res[i][j];
        }
    }
    */

    // 方法二: 原地修改, 利用复合状态
    // 1 -> 0 时, 记作 -1, 表示原纪录为 1
    // 1 -> 1 时, 记作 1,  表示原纪录为 1
    // 0 -> 1 时, 记作 2,  表示原纪录为 0

    const m = board.length;
    const n = board[0].length;
    const neighbors = [0, 1, -1];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 计算周围活细胞数量
            let liveNum = 0;
            for (let l = 0; l < 3; l++) {
                for (let k = 0; k < 3; k++) {
                    if (neighbors[l] === 0 && neighbors[k] === 0) {
                        continue;
                    }
                    // 相邻位置坐标
                    let r = i + neighbors[l];
                    let c = j + neighbors[k];

                    if (
                        r >= 0 &&
                        r < m &&
                        c >= 0 &&
                        c < n &&
                        (board[r][c] === 1 || board[r][c] === -1)
                    ) {
                        liveNum++;
                    }
                }
            }

            if (board[i][j] === 1 && (liveNum < 2 || liveNum > 3)) {
                // 原先活着, 按照规则, 死亡, 1 -> 0, 但是别的位置判断时需要认为是活的, 记作 -1
                board[i][j] = -1;
            }

            if (board[i][j] === 0 && liveNum === 3) {
                // 原先死亡, 按照规则, 复活, 0 -> 1, 但是别的位置判断时需要认为是死亡, 记作 2
                board[i][j] = 2;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === -1) {
                board[i][j] = 0;
            } else if (board[i][j] === 2) {
                board[i][j] = 1;
            }
        }
    }
}
