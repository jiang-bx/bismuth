export function exist(board: string[][], word: string): boolean {
    const m = board.length;
    const n = board[0].length;
    const w = word.length;
    const backtrack = (r: number, i: number, j: number): boolean => {
        if (i < 0 || j < 0 || i >= m || j >= n || word[r] !== board[i][j]) {
            return false;
        }

        if (r === w - 1) {
            return true;
        }

        board[i][j] = "";

        const res =
            backtrack(r + 1, i - 1, j) ||
            backtrack(r + 1, i + 1, j) ||
            backtrack(r + 1, i, j - 1) ||
            backtrack(r + 1, i, j + 1);

        board[i][j] = word[r];

        return res;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (backtrack(0, i, j)) {
                return true;
            }
        }
    }

    return false;
}
