export function combine(n: number, k: number): number[][] {
    const ans: number[][] = [];
    let vals: number[] = [];
    const backtrack = (r: number) => {
        if (vals.length === k) {
            ans.push([...vals]);
            return;
        }

        // for (let i = r; i <= n; i++) {

        // 剪枝条件
        for (let i = r; i <= n - (k - vals.length) + 1; i++) {
            vals.push(i);
            backtrack(i + 1);
            vals.pop();
        }
    };

    backtrack(1);

    return ans;
}
