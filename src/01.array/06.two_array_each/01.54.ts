export const spiralOrder = (matrix: number[][]): number[] => {
    const arr: number[] = [];

    if (!matrix.length) {
        return arr;
    }

    let t = 0
    let b = matrix.length - 1
    let l = 0
    let r = matrix[0].length - 1

    while (true) {
        // 向右移动
        for (let i = l; i <= r; ++i) {
            arr.push(matrix[t][i])
        }

        // 上边界超出下边界
        if (++t > b) {
            break
        }

        // 向下移动
        for (let i = t; i <= b; ++i) {
            arr.push(matrix[i][r])
        }

        if (--r < l) {
            break
        }

        // 向左移动
        for (let i = r; i >= l; --i) {
            arr.push(matrix[b][i])
        }

        if (--b < t) {
            break
        }

        // 向上移动
        for (let i = b; i >= t; --i) {
            arr.push(matrix[i][l])
        }

        if (++l > r) {
            break
        }
    }

    return arr;
};
