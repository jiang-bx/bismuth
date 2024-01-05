export function removeKdigits(num: string, k: number): string {
    const stack = [];

    for (let i = 0; i < num.length; i++) {
        while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
            stack.pop();
            k -= 1;
        }

        // 处理前导 0, 为 0 时, 并且 stack 为空时, 不入栈
        if (num[i] === "0" && stack.length === 0) {
            continue;
        }
        stack.push(num[i]);
    }

    // 如果 k 还存在,
    while (k > 0 && stack.length > 0) {
        stack.pop();
        k--;
    }

    if (stack.length === 0) {
        return "0";
    }

    return stack.join("");
}
