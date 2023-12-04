export function calPoints(operations: string[]): number {
    const stack = [];
    for (let i = 0; i < operations.length; i++) {
        let item = operations[i];

        if (item === "C") {
            stack.pop();
        } else if (item === "D") {
            stack.push(stack[stack.length - 1] * 2);
        } else if (item === "+") {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else {
            stack.push(Number(item));
        }
    }

    let count = 0;

    for (let i = 0; i < stack.length; i++) {
        count += stack[i];
    }

    return count;
}
