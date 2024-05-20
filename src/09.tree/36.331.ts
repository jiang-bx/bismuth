// 9,3,4,#,#,1,#,#,2,#, 6, #, #
// 0 1 2 3 4 5 6 7 8 9 10 11 12
export function isValidSerialization1(preorder: string): boolean {
    // 前序遍历得到的 str
    // 利用栈
    const stack: string[] = [];
    const arr = preorder.split(",");

    arr.forEach((node) => {
        stack.push(node);

        while (
            stack.length >= 3 &&
            stack[stack.length - 1] === "#" &&
            stack[stack.length - 2] === "#" &&
            stack[stack.length - 3] !== "#"
        ) {
            // 将子节点转为 空
            stack.pop();
            stack.pop();
            stack.pop();
            stack.push("#");
        }
    });

    return stack.length === 1 && stack[0] === "#";
}

export function isValidSerialization(preorder: string): boolean {
    // 利用 出度和入度
    // 所有节点的入度之和等于出度之和
    const arr = preorder.split(",");
    let diff = 1;

    for (let i = 0; i < arr.length; i++) {
        diff -= 1;

        if (diff < 0) {
            return false;
        }

        if (arr[i] != "#") {
            diff += 2;
        }
    }

    return diff === 0;
}
