export function matrixReshape(
    mat: number[][],
    r: number,
    c: number
): number[][] {
    let m = mat.length;
    let n = mat[0].length;

    if (m * n !== r * c) {
        return mat;
    }

    let l = 0,
        k = 0;
    const res = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (k >= c) {
                k = 0;
                l++;
            }

            if (k === 0) {
                res.push([]);
            }

            res[l][k++] = mat[i][j];
        }
    }

    return res;
}
