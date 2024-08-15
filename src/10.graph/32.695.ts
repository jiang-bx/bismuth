export function maxAreaOfIsland1(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let ans = 0;

    const bfs = (i: number, j: number): number => {
        const stack: number[][] = [[i, j]];
        let res = 0;

        while (stack.length) {
            const [r, c] = stack.pop();
            if (r < 0 || r >= m || c < 0 || c >= n) {
                continue;
            }

            if (grid[r][c] === 1) {
                grid[r][c] = 2;
                res++;

                stack.push(
                    ...[
                        [r - 1, c],
                        [r + 1, c],
                        [r, c - 1],
                        [r, c + 1],
                    ]
                );
            }
        }

        return res;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                ans = Math.max(ans, bfs(i, j));
            }
        }
    }

    return ans;
}

export function maxAreaOfIsland(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let ans = 0;

    const dfs = (r: number, c: number): number => {
        if (r < 0 || r >= m || c < 0 || c >= n) {
            return 0;
        }

        if (grid[r][c] === 1) {
            grid[r][c] = 2;

            return (
                1 +
                dfs(r - 1, c) +
                dfs(r + 1, c) +
                dfs(r, c - 1) +
                dfs(r, c + 1)
            );
        }

        return 0;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                ans = Math.max(ans, dfs(i, j));
            }
        }
    }

    return ans;
}
