export function generateMatrix(n: number): number[][] {
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    let k = 1;

    const res: number[][] = [];

    for (let i = 0; i < n; i++) {
        res[i] = new Array(n).fill(0);
    }

    while (true) {
        for (let i = left; i <= right; ++i) {
            res[top][i] = k++;
        }
        if (++top > bottom) {
            break;
        }
        for (let i = top; i <= bottom; ++i) {
            res[i][right] = k++;
        }
        if (--right < left) {
            break;
        }
        for (let i = right; i >= left; --i) {
            res[bottom][i] = k++;
        }
        if (--bottom < top) {
            break;
        }
        for (let i = bottom; i >= top; --i) {
            res[i][left] = k++;
        }
        if (++left > right) {
            break;
        }
    }

    return res;
}
