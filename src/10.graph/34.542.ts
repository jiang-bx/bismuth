export function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length;
    const n = mat[0].length;
    const used = new Array(m)
        .fill(0)
        .map(() => new Array<boolean>(n).fill(false));

    const ans = new Array(m).fill(0).map(() => new Array<number>(n).fill(0));

    const queue: number[][] = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] == 0) {
                used[i][j] = true;
                ans[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    const dir = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
    ];

    while (queue.length) {
        const [i, j] = queue.shift();
        for (let k = 0; k < 4; k++) {
            const r = dir[k][0] + i;
            const c = dir[k][1] + j;

            if (r < 0 || r >= m || c < 0 || c >= n) {
                continue;
            }

            if (!used[r][c]) {
                ans[r][c] = ans[i][j] + 1;
                used[r][c] = true;
                queue.push([r, c]);
            }
        }
    }

    return ans;
}
