/**
 * 每行, 每列, 只能存在一个 皇后
 * @param n
 * @returns
 */
export function solveNQueens(n: number): string[][] {
    const ans: string[][] = [];

    // 下标代表行, 值代表列
    const col = new Array(n).fill(0);

    // 下标代表当前列是否放置皇后
    const onPath = new Array(n).fill(false);

    // 左上右下 / 对角线, y1 - x1 = y2 - x2
    const d1 = new Array(2 * n).fill(false);

    // 右上左下 \ 对角线, y1 + x1 = y2 + x2
    const d2 = new Array(2 * n).fill(false);

    /**
     * 回溯
     * @param r 表示枚举的行
     */
    const backtrack = (r: number) => {
        // 所有行枚举完毕, 放置完所有皇后
        if (r == n) {
            const board = new Array(n);

            // i 是行, c 是列
            col.forEach((c, i) => {
                board[i] = ".".repeat(c) + "Q" + ".".repeat(n - 1 - c);
            });
            ans.push(board);
            return;
        }

        // 判断当前列, 是否能防止皇后
        for (let c = 0; c < onPath.length; c++) {
            // 对角线: /
            const rc1 = r - c + n; // +n 防止下标越界

            // 对角线: \
            const rc2 = r + c;

            // 当前列是否放置皇后
            const v = onPath[c];

            // 当前列, 左上斜线, 右上斜线, 都没有皇后时, 才能放
            if (!v && !d1[rc1] && !d2[rc2]) {
                // 在 r 行的 c 列放置皇后, 每行的值都会被覆盖
                col[r] = c;
                onPath[c] = true;
                d1[rc1] = true;
                d2[rc2] = true;

                // 回溯
                backtrack(r + 1);

                onPath[c] = false;
                d1[rc1] = false;
                d2[rc2] = false;
            }
        }
    };

    backtrack(0);

    return ans;
}
