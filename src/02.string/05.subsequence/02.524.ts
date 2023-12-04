// 找到 dictionary 属于 s 子串的, 并且是长度最长并且字母序最小
export function findLongestWord(s: string, dictionary: string[]): string {
    /**
    const n = s.length;
    let minStr = "";
    for (let i = 0; i < dictionary.length; i++) {
        const cur = dictionary[i];
        const m = cur.length;
        let j = 0,
            k = 0;
        while (j < n && k < m) {
            if (cur[k] === s[j]) {
                k++;
            }
            j++;
        }

        if (k === m) {
            if (m > minStr.length || (m === minStr.length && cur < minStr)) {
                minStr = cur;
            }
        }
    }

    return minStr;
     */

    // 先将 dictionary 排序从大到小排序

    dictionary.sort((a, b) => {
        if (a.length !== b.length) {
            return b.length - a.length;
        } else {
            return a.localeCompare(b);
        }
    });

    const n = s.length;

    for (const t of dictionary) {
        const m = t.length;
        if (m > n) {
            continue;
        }
        let i = 0,
            j = 0;
        while (i < m && j < n) {
            if (t[i] === s[j]) {
                i++;
            }
            j++;
        }
        if (i === m) {
            return t;
        }
    }

    return "";
}
