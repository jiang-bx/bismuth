export const findDiagonalOrder = (mat: number[][]): number[] => {
    const res = [];

    let i = 0,
        m = mat.length,
        n = mat[0].length;

    while (i < n + m) {
        // 确定初始值
        let x1 = i < m ? i : m - 1;
        let y1 = i - x1;

        // 确定结束值
        while (x1 >= 0 && y1 < n) {
            res.push(mat[x1][y1]);
            x1--;
            y1++;
        }
        i++;

        if (i >= m + n) {
            break;
        }

        let y2 = i < n ? i : n - 1;
        let x2 = i - y2;

        while (y2 >= 0 && x2 < m) {
            res.push(mat[x2][y2]);
            x2++;
            y2--;
        }
        i++;
    }

    return res;
};
