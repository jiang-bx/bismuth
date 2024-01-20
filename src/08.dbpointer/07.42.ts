export function trap(height: number[]): number {
    /**
     * 双指针法
     // let ans = 0;
    // let l = 0;
    // let r = height.length - 1;

    // while (l < r) {
    //     if (height[l] <= height[r]) {
    //         // 从前面向后
    //         const cur = height[l];
    //         l++;
    //         while (l < r && cur > height[l]) {
    //             ans += cur - height[l];
    //             l++;
    //         }
    //     } else {
    //         // 从尾部向前
    //         const cur = height[r];
    //         r--;
    //         while (l < r && cur > height[r]) {
    //             ans += cur - height[r];
    //             r--;
    //         }
    //     }
    // }
    // return ans;
    */

    // 单调栈法
    let ans = 0;
    const stack = [];

    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[stack[stack.length - 1]] <= height[i]) {
            const cur = stack[stack.length - 1];
            stack.pop();
            if (!stack.length) {
                break;
            }

            // 当前的 l 只是, 临时的左边界
            // 例如: stack为 2, 1, 1 时, height[i] = 3
            // 左边界为 1, cur 为 1, 右边界为 3, 结果为 h= 1 - 1 = 0
            // 再次进入: stack 为: 2, 1 时, height[i] = 3
            // 左边界为 2, cur 为 1, 右边界为 3, 结果为 h = 2 - 1 = 1
            // w = r - l - 1, 不包含左右边界

            const l = stack[stack.length - 1];
            const r = i;
            const h = Math.min(height[l], height[r]) - height[cur];
            ans += (r - l - 1) * h;
        }

        stack.push(i);
    }

    return ans;
}
