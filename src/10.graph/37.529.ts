export function updateBoard(board: string[][], click: number[]): string[][] {
    const [r, c] = click;
    const m = board.length;
    const n = board[0].length;

    if (board[r][c] === "M") {
        board[r][c] = "X";
        return board;
    }

    const dr = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
    ];

    const dfs = (i: number, j: number) => {
        let count = 0;
        dr.forEach((it) => {
            const x = it[0] + i;
            const y = it[1] + j;

            if (x < 0 || x >= m || y < 0 || y >= n) {
                return;
            }
            if (board[x][y] === "M") {
                count++;
            }
        });

        if (count > 0) {
            board[i][j] = count + "";
            return;
        }

        board[i][j] = "B";

        dr.forEach((it) => {
            const x = it[0] + i;
            const y = it[1] + j;

            if (x < 0 || x >= m || y < 0 || y >= n) {
                return;
            }
            if (board[x][y] !== "E") {
                return;
            }

            dfs(x, y);
        });
    };

    dfs(r, c);

    return board;
}
