export function checkInclusion(s1: string, s2: string): boolean {
    const s1Cnt = new Array(26).fill(0);
    const s2Cnt = [...s1Cnt];
    const base = "a".charCodeAt(0);
    const m = s1.length;

    for (let i = 0; i < m; i++) {
        s1Cnt[s1.charCodeAt(i) - base]++;
    }

    let l = 0;

    for (let r = 0; r < s2.length; r++) {
        const curR = s2.charCodeAt(r) - base;
        s2Cnt[curR]++;

        // 说明当前字符在 s1 中不存在, 或者在 s2 中的数量大于 s1
        // 这时窗口左端会进行右移
        while (s2Cnt[curR] > s1Cnt[curR]) {
            const curL = s2.charCodeAt(l) - base;
            s2Cnt[curL]--;
            l++;
        }

        // 当 s1 数量与 s2 中的数量相同时, 窗口右端右移

        if (r - l + 1 === m) {
            return true;
        }
    }

    return false;
}
