export function numIslands1(grid: string[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let ans = 0;
    const dfs = (i: number, j: number) => {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return;
        }

        if (grid[i][j] === "1") {
            grid[i][j] = "2";
            dfs(i - 1, j);
            dfs(i + 1, j);
            dfs(i, j - 1);
            dfs(i, j + 1);
        }
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                ans++;
                dfs(i, j);
            }
        }
    }

    return ans;
}

/**
 * BFS
 * @param grid
 * @returns
 */
export function numIslands(grid: string[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let ans = 0;
    const bfs = (r: number, c: number) => {
        const stack: number[][] = [[r, c]];
        while (stack.length) {
            const cur = stack.pop();
            const [i, j] = cur;

            if (i < 0 || i >= m || j < 0 || j >= n) {
                continue;
            }

            if (grid[i][j] === "1") {
                grid[i][j] = "2";

                stack.push(
                    ...[
                        [i - 1, j],
                        [i + 1, j],
                        [i, j - 1],
                        [i, j + 1],
                    ]
                );
            }
        }
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                ans++;
                bfs(i, j);
            }
        }
    }

    return ans;
}
