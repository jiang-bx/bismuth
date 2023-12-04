export function strStr(haystack: string, needle: string): number {
    /**
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] !== needle[0]) {
            continue;
        }

        let k = i;
        let isComplete = false;
        for (let j = 0; j < needle.length; j++, k++) {
            if (haystack[k] !== needle[j]) {
                isComplete = true;
                break;
            }
        }

        if (!isComplete) {
            return i;
        }
    }

    return -1;
     */

    // 优化前面的算法
    const m = haystack.length;
    const n = needle.length;

    for (let i = 0; i < m - n + 1; i++) {
        if (haystack[i] !== needle[0]) {
            continue;
        }

        let k = i,
            j = 0;
        for (; j < n && k < m; j++, k++) {
            if (haystack[k] !== needle[j]) {
                break;
            }
        }

        if (j === n) {
            return i;
        }
    }

    return -1;
}
