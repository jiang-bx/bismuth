export function maxScore(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Set<number>();
    let count = 0;

    for (let i = 0; i < m; i++) {
        grid[i].sort((a, b) => b - a);
    }

    

    return count;
}
