export function pacificAtlantic(heights: number[][]): number[][] {
    const m = heights.length;
    const n = heights[0].length;
    const po = new Array<boolean[][]>(m)
        .fill([])
        .map(() => new Array<boolean>(n).fill(false));

    const ao = new Array<boolean[][]>(m)
        .fill([])
        .map(() => new Array(n).fill(false));

    const ans: number[][] = [];

    const dfs = (r: number, c: number, oo: boolean[][]) => {
        if (oo[r][c]) {
            return;
        }
        oo[r][c] = true;

        if (r - 1 >= 0 && heights[r - 1][c] >= heights[r][c]) {
            dfs(r - 1, c, oo);
        }

        if (r + 1 < m && heights[r + 1][c] >= heights[r][c]) {
            dfs(r + 1, c, oo);
        }

        if (c - 1 >= 0 && heights[r][c - 1] >= heights[r][c]) {
            dfs(r, c - 1, oo);
        }

        if (c + 1 < n && heights[r][c + 1] >= heights[r][c]) {
            dfs(r, c + 1, oo);
        }
    };

    for (let i = 0; i < m; i++) {
        // 左边界
        dfs(i, 0, po);
        // 右边界
        dfs(i, n - 1, ao);
    }

    for (let j = 0; j < n; j++) {
        // 上边界
        dfs(0, j, po);
        // 下边界
        dfs(m - 1, j, ao);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (po[i][j] && ao[i][j]) {
                ans.push([i, j]);
            }
        }
    }

    return ans;
}
