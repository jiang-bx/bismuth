export function combinationSum3(k: number, n: number): number[][] {
    // 1 ~ 9 中 和为 n, 数量为 k 的组合,
    // 每个数字只能使用一次

    const ans: number[][] = [];
    const onPath: number[] = [];
    let total = 0;

    const backtrack = (r: number) => {
        if (onPath.length === k && total === n) {
            ans.push([...onPath]);
            return;
        }

        for (let i = r; i <= 9; i++) {
            if (total + i > n) {
                break;
            }

            total += i;
            onPath.push(i);
            backtrack(i + 1);
            total -= i;
            onPath.pop();
        }
    };

    backtrack(1);

    return ans;
}
