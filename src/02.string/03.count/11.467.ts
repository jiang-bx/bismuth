export function findSubstringInWraproundString(p: string): number {
    // 只需找到 以每个字母结尾而形成最长连续的字符串长度就行了
    const dp = new Array(26).fill(0);
    const base = "a".charCodeAt(0);
    let k = 1;

    dp[p[0].charCodeAt(0) - base]++;

    for (let i = 1; i < p.length; i++) {
        const c = p[i].charCodeAt(0) - base;
        const f = p[i - 1].charCodeAt(0) - base;

        if ((f === 25 && c === 0) || f + 1 === c) {
            k++;
        } else {
            k = 1;
        }

        dp[c] = Math.max(dp[c], k);
    }

    let ans = 0;

    for (let i = 0; i < 26; i++) {
        ans += dp[i];
    }

    return ans;
}
