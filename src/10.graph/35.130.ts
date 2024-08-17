export function solve(board: string[][]): void {
    const m = board.length;
    const n = board[0].length;
    const dfs = (r: number, c: number) => {
        if (r < 0 || r >= m || c < 0 || c >= n) {
            return;
        }

        if (board[r][c] === "X" || board[r][c] === "*") {
            return;
        }

        board[r][c] = "*";

        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (
                board[i][j] === "O" &&
                (i === 0 || j === 0 || i === m - 1 || j === n - 1)
            ) {
                dfs(i, j);
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "O") {
                board[i][j] = "X";
            }

            if (board[i][j] === "*") {
                board[i][j] = "O";
            }
        }
    }
}
