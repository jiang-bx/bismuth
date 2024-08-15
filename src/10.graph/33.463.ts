export function islandPerimeter1(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let land = 0;
    let nextLand = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                land++;

                if (i < m - 1 && grid[i + 1][j] === 1) {
                    nextLand++;
                }

                if (j < n - 1 && grid[i][j + 1] === 1) {
                    nextLand++;
                }
            }
        }
    }

    return 4 * land - 2 * nextLand;
}

export function islandPerimeter2(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const bfs = (i: number, j: number): number => {
        let res = 0;
        const stack: number[][] = [[i, j]];

        while (stack.length) {
            const [r, c] = stack.pop();

            if (r < 0 || r >= m || c < 0 || c >= n) {
                res++;
                continue;
            }

            if (grid[r][c] == 0) {
                res++;
            }

            if (grid[r][c] == 1) {
                grid[r][c] = 2;

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
                return bfs(i, j);
            }
        }
    }

    return 0;
}

export function islandPerimeter(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const dfs = (r: number, c: number): number => {
        if (r < 0 || r >= m || c < 0 || c >= n) {
            return 1;
        }

        if (grid[r][c] == 0) {
            return 1;
        }

        if (grid[r][c] == 1) {
            grid[r][c] = 2;

            return (
                dfs(r - 1, c) + dfs(r + 1, c) + dfs(r, c - 1) + dfs(r, c + 1)
            );
        }

        return 0;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return dfs(i, j);
            }
        }
    }

    return 0;
}
