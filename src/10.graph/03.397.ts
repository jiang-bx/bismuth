export function integerReplacement1(n: number): number {
    let ans = 0;
    while (n !== 1) {
        if (n % 2 === 0) {
            n >>= 1;
        } else {
            if (n !== 3 && ((n >> 1) & 1) === 1) {
                n++;
            } else {
                n--;
            }
        }
        ans++;
    }
    return ans;
}

export function integerReplacement(n: number): number {
    const m = new Map<number, number>();
    const dfs = (num: number): number => {
        if (num === 1) {
            return 0;
        }
        if (m.has(num)) {
            return m.get(num);
        }

        let ans =
            num % 2 === 0 ? dfs(num / 2) : Math.min(dfs(num + 1), dfs(num - 1));

        m.set(num, ++ans);

        return ans;
    };

    return dfs(n);
}
