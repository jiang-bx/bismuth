export function minWindow(s: string, t: string): string {
    const m = t.length;
    const cnt = new Array(128).fill(0);

    for (let i = 0; i < m; i++) {
        cnt[t.charCodeAt(i)]++;
    }

    let count = m;
    let l = 0;
    let start = 0;
    let size = Infinity;

    for (let r = 0; r < s.length; r++) {
        const c = s.charCodeAt(r);

        // 需要该字符
        if (cnt[c] > 0) {
            count--;
        }

        // 将该字符加入窗口右侧
        cnt[c]--;

        if (count !== 0) {
            continue;
        }

        // 当 count == 0 时, 满足了包含 t 中的所有字符
        // 此时, 需要减小窗口, 找到 s 中的最小字符

        // cnt[s.charCodeAt(l)] < 0 时, 说明, 该字符不是在 t 中
        while (l < r && cnt[s.charCodeAt(l)] < 0) {
            // 从窗口内移除
            cnt[s.charCodeAt(l)]++;
            l++;
        }

        // 更新最小的窗口数据
        if (r - l + 1 < size) {
            size = r - l + 1;
            start = l;
        }
    }

    return size === Infinity ? "" : s.slice(start, start + size);
}
