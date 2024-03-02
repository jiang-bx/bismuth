export function characterReplacement(s: string, k: number): number {
    const cnt = new Array(26).fill(0);
    const base = "A".charCodeAt(0);

    let historyCharMax = 0;
    let l = 0;
    let res = 0;

    for (let r = 0; r < s.length; r++) {
        const curR = s.charCodeAt(r) - base;
        cnt[curR]++;

        // 记录窗口内出现的最大的字符数
        historyCharMax = Math.max(historyCharMax, cnt[curR]);

        // 窗口的长度 > 窗口内出现的最大的字符数 + k, 需要减小区间的范围
        while (r - l + 1 > historyCharMax + k) {
            cnt[s.charCodeAt(l) - base]--;
            l++;
        }
        res = Math.max(res, r - l + 1);
    }

    return res;
}
