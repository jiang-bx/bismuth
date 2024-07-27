export function getPermutation1(n: number, k: number): string {
    const onPath: number[] = [];
    const used = new Array(n + 1).fill(false);
    let ans = "";

    const backtrack = (): boolean => {
        if (onPath.length === n) {
            k--;
            if (k === 0) {
                ans = onPath.join("");
            }
            return k === 0;
        }

        for (let i = 1; i <= n; i++) {
            if (!used[i]) {
                used[i] = true;
                onPath.push(i);

                if (backtrack()) {
                    return true;
                }

                used[i] = false;
                onPath.pop();
            }
        }

        return false;
    };

    backtrack();

    return ans;
}

export function getPermutation(n: number, k: number): string {
    const factorial = new Array(n + 1).fill(1);
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    const nums = new Array(n).fill(0).map((t, i) => i + 1);

    let ans = "";
    k--;
    for (let i = n; i > 0; i--) {
        // 以每位数开头有几组阶乘, 例如 4!=24, g = 24 / 4 = 6
        const group = factorial[i] / i;

        // 计算 k 在 nums 中的位置
        const index = Math.floor(k / group);

        // 添加进结果中
        ans += nums[index];

        // 将nums 中 index 位置元素的移除
        nums.splice(index, 1);

        k -= group * index;
    }

    return ans;
}
