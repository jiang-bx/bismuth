export function rotate(matrix: number[][]): void {
    /**
     * 伪代码:
     * 遍历每一圈: i = 0; i <= Math.floor(n / 2)
     *   每一圈中的元素挨个遍历 j = i; j <= n - 2 - i,
     *   最后一个元素已经被交换过了, 所以是 n - 2
     *     上下左右依次交换位置
     *     start = i
     *     end = n - 1 - i
     *     leftTop = arr[start][j]
     *     rightTop = arr[j][end]
     *     rightBottom = arr[end][end - j]
     *     leftBottom = arr[end - j][start]
     *
     * 不行, 第二圈的时候, 无法准确的计算出四个角的位置
     */

    // const n = matrix.length;
    // for (let i = 0; i <= Math.floor(n / 2); i++) {
    //     // 每一圈
    //     for (let j = i; j <= n - 2 - i; j++) {
    //         let start = i;
    //         let end = n - 1 - i;

    //         let leftTop = matrix[start][j];
    //         let rightTop = matrix[j][end];
    //         let rightBottom = matrix[end][end - j];
    //         let leftBottom = matrix[end - j][start];

    //         matrix[j][end] = leftTop;
    //         matrix[end][end - j] = rightTop;
    //         matrix[end - j][start] = rightBottom;
    //         matrix[start][j] = leftBottom;
    //     }
    // }

    /**
     * 考虑分块旋转,
     * 即: 分为四份, 成片移动
     * 例如: 当 i = 0, j = 1 时
     * (0, 1) -> (1, 4) -> (4, 3) -> (3, 0) -> (0, 1)
     * 也就是:
     * (i, j) -> (j, n - i) -> (n - i, n - j) -> (n - j, i) -> (i, j)
     */

    const n = matrix.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[n - 1 - j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = temp;
        }
    }
}
