export function searchMatrixII(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    const n = matrix[0].length;

    // 从右上角开始查找
    let i = 0;
    let j = n - 1;

    while (i < m && j >= 0) {
        const val = matrix[i][j];

        if (target == val) {
            return true;
        }

        if (target > val) {
            i++;
        } else {
            j--;
        }
    }

    return false;
}
