export class NumMatrix {
    /** 暴力解法
    matrix: number[][]
    constructor(matrix: number[][]) {
        this.matrix = matrix
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let count = 0

        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                count += this.matrix[i][j];
            }
        }

        return count
    }
     */

    sums: number[][];
    constructor(matrix: number[][]) {
        const m = matrix.length;
        const n = matrix[0].length;
        this.sums = [];
        this.sums.push(new Array(n + 1).fill(0));

        for (let i = 0; i < m; i++) {
            this.sums.push(new Array(n + 1).fill(0));
            for (let j = 0; j < n; j++) {
                this.sums[i + 1][j + 1] =
                    this.sums[i + 1][j] +
                    this.sums[i][j + 1] -
                    this.sums[i][j] +
                    matrix[i][j];
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number) {
        return (
            this.sums[row2 + 1][col2 + 1] -
            this.sums[row2 + 1][col1] -
            this.sums[row1][col2 + 1] +
            this.sums[row1][col1]
        );
    }
}
