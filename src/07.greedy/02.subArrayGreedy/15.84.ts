export function largestRectangleArea(heights: number[]): number {
    // stack 存下标
    const stack = [];
    let ans = 0;

    heights.unshift(0);
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
            // 此时栈顶元素的右边界已经确定, 就是索引为i的柱子(不含)
            // 栈顶矩形 左边界为栈顶元素下面的索引 (第一个小于栈顶)

            // 当前最高的矩形
            const cur = stack.pop();

            // 因此: 矩形宽度 = 右索引- 左索引 - 1
            const w = i - stack[stack.length - 1] - 1;
            ans = Math.max(ans, w * heights[cur]);
        }
        stack.push(i);
    }

    return ans;
}
