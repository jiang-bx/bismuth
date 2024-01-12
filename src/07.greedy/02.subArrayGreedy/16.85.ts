export function maximalRectangle(matrix: string[][]): number {
    /**
     // 暴力解法
    // 从左往右, 记录每个点连续的宽度
    // 从下往上, 记录每个点连续的高度

    const size: number[][] = Array.from(matrix).map(() =>
        new Array(matrix[0].length).fill(0)
    );

    let maxArea = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            // 更新 width
            if (matrix[i][j] === "1") {
                if (j === 0) {
                    size[i][j] = 1;
                } else {
                    size[i][j] = size[i][j - 1] + 1;
                }
            } else {
                size[i][j] = 0;
            }

            // 当前列中, 所有行的最小宽度
            let minWidth = size[i][j];

            // 向上扩展
            for (let k = i; k >= 0; k--) {
                const height = i - k + 1;
                minWidth = Math.min(minWidth, size[k][j]);
                maxArea = Math.max(maxArea, height * minWidth);
            }
        }
    }

    return maxArea;
     */

    // 利用 84 题, 求最高矩形的面积计算方法, 单调栈
    const heights = new Array(matrix[0].length + 2).fill(0);
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < heights.length; j++) {
            if (
                j === 0 ||
                j === heights.length - 1 ||
                matrix[i][j - 1] === "0"
            ) {
                heights[j] = 0;
            } else {
                heights[j] += 1;
            }

            while (
                stack.length &&
                heights[j] < heights[stack[stack.length - 1]]
            ) {
                const cur = stack.pop();
                const leftMin = stack[stack.length - 1];

                // 右侧边界, 不包含
                const rightMin = j - 1;
                const area = (rightMin - leftMin) * heights[cur];
                maxArea = Math.max(maxArea, area);
            }
            stack.push(j);
        }
    }

    return maxArea;
}
