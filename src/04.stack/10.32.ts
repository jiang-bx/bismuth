// 格式正确且连续
export function longestValidParentheses(s: string): number {
    // 暴力解法: 找到所有 符合的 index, 最后排序, 找到连续最长的 index
    // const stack: number[] = [];
    // const indexList: number[] = [];
    // let count = 0;
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === "(") {
    //         stack.push(i);
    //     } else {
    //         if (stack.length) {
    //             // 记录在 i 的位置
    //             indexList.push(stack.pop(), i);
    //         }
    //     }
    // }

    // indexList.sort((a, b) => a - b);

    // // 在 indexList 找到最大连续结果, 例如: 0, 1, 3, 4
    // let i = 0;
    // while (i < indexList.length) {
    //     let j = i;
    //     while (
    //         j < indexList.length - 1 &&
    //         indexList[j + 1] == indexList[j] + 1
    //     ) {
    //         j++;
    //     }
    //     count = Math.max(count, j - i + 1);
    //     i = j + 1;
    // }

    // return count;

    // 优化暴力解法
    const stack: number[] = [-1];
    let count = 0;

    // 核心思路: stack 在 ) 出栈之后, 最后一个元素永远记录了上次开始的位置,
    // 通过 i - 最后一个元素就能计算出最大长度
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length) {
                count = Math.max(count, i - stack[stack.length - 1]);
            } else {
                stack.push(i);
            }
        }
    }

    return count;
}
