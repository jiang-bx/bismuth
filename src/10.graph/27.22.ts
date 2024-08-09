export function generateParenthesis(n: number): string[] {
    const ans: string[] = [];
    const onPath = [];
    const backtrack = (r: number) => {
        if (onPath.length === 2 * n) {
            ans.push(onPath.join(""));
            return;
        }

        // 左括号
        if (r < n) {
            onPath.push("(");
            backtrack(r + 1);
            onPath.pop();
        }

        // 右括号 = 全部 - 左括号
        // 什么时候可以选右括号? 左括号 > 右括号, 可以选择右括号
        if (r > onPath.length - r) {
            onPath.push(")");
            // 选右括号时, 左括号不能改变
            backtrack(r);
            onPath.pop();
        }
    };

    backtrack(0);

    return ans;
}
