// a = a 最长子序列
// b = b 最长子序列
// 最长特殊子序列, 为 a 独有 或者 b 独有的最长子序列
// 从字符串数组中找最长的一个原字符串，该字符串不是其他字符串的子序列
export function findLUSLength2(strs: string[]): number {
    function isSubStr(a: string, b: string): boolean {
        const m = a.length,
            n = b.length;
        if (m > n) {
            return false;
        }

        let i = 0,
            j = 0;
        while (i < m && j < n) {
            if (a[i] === b[j]) {
                i++;
            }
            j++;
        }

        return i === m;
    }

    let ans = -1;
    out: for (let [i, s] of strs.entries()) {
        if (s.length > ans) {
            for (let [j, s_] of strs.entries()) {
                if (j != i && isSubStr(s, s_)) {
                    continue out;
                }
            }
            ans = s.length;
        }
    }
    return ans;
}
