export function reverseStr(s: string, k: number): string {
    const n = s.length;

    const reverse = (s: string[], start: number, end: number) => {
        for (let i = start, j = end; i < j; i++, j--) {
            const temp = s[i];
            s[i] = s[j];
            s[j] = temp;
        }
    };

    const sArr = s.split("");

    /**
    for (let i = 0; i < n; i += 2 * k) {
        const surplusChar = n - i;
        // 是否足够 2k 个字符
        if (surplusChar >= 2 * k) {
            // 有 2k 个字符, 翻转前 k 个字符
            reverse(sArr, i, i + k - 1);
        } else {
            // 剩余不到 2k 个字符
            if (surplusChar >= k) {
                // 但是大于 k 个字符, 翻转前 k 个字符
                reverse(sArr, i, i + k - 1);
            } else {
                // 小于 k 个字符, 翻转所有字符
                reverse(sArr, i, n - 1);
            }
        }
    }
     */

    // 改进, 在 k 和 不足 k 个之间选择最小的
    for (let i = 0; i < n; i += 2 * k) {
        reverse(sArr, i, Math.min(i + k - 1, n - 1));
    }

    return sArr.join("");
}
