export function setZeroes(matrix: number[][]): void {
    /**
    // 方法 1, 利用额外空间
    const zeroPoints: number[][] = [];
    const m = matrix.length;
    const n = matrix[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                zeroPoints.push([i, j]);
            }
        }
    }

    for (let i = 0; i < zeroPoints.length; i++) {
        const item = zeroPoints[i];
        // 修改列
        for (let l = 0; l < m; l++) {
            matrix[l][item[1]] = 0;
        }
        // 修改行
        for (let k = 0; k < n; k++) {
            matrix[item[0]][k] = 0;
        }
    }
     */

    // 方法 2: 原地修改
    // 原理: 利用首列首行来标记是否有 0
    const m = matrix.length;
    const n = matrix[0].length;

    let hasRowZero = false;
    let hasColZero = false;

    // 判断第一行是否有 0
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            hasRowZero = true;
            break;
        }
    }

    // 判断第一列是否有 0
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            hasColZero = true;
            break;
        }
    }

    // 将第一行和第一列作为标志位
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    // 根据第一行的 0 的标志位, 将剩余的位置置为 0
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // 如果第一行存在原始的 0, 需要将第一行置为 0
    if (hasRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // 如果第一列存在原始的 0, 需要将第一列置为 0
    if (hasColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
}
