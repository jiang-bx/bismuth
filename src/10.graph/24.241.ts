export function diffWaysToCompute(expression: string): number[] {
    // 判断 expression 是不是纯数字
    const temp = Number(expression);
    if (!isNaN(temp)) {
        return [temp];
    }

    const ans: number[] = [];

    for (let i = 0; i < expression.length; i++) {
        const ch = expression[i];
        if (!["+", "-", "*"].includes(ch)) {
            continue;
        }

        const lefts = diffWaysToCompute(expression.slice(0, i));
        const rights = diffWaysToCompute(expression.slice(i + 1));

        lefts.forEach((l) => {
            rights.forEach((r) => {
                let cur = 0;
                if (ch === "+") {
                    cur = l + r;
                } else if (ch === "-") {
                    cur = l - r;
                } else {
                    cur = l * r;
                }

                ans.push(cur);
            });
        });
    }

    return ans;
}
