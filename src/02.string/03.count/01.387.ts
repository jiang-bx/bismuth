export function firstUniqChar(s: string): number {
    /**
    // 方法 1, 找到所有重复的字符, 利用额外的空间和时间
    const obj = {};
    const n = s.length;

    for (let i = 0; i < n; i++) {
        obj[s[i]] = !obj[s[i]] ? 1 : obj[s[i]] + 1;
    }

    for (let i = 0; i < n; i++) {
        if (obj[s[i]] === 1) {
            return i;
        }
    }

    return -1;
     */

    // 方法二, 利用数组, ASCII 码
    const arr = [];
    const n = s.length;

    for (let i = 0; i < n; i++) {
        const index = s[i].charCodeAt(0) - "a".charCodeAt(0);
        arr[index] = !arr[index] ? 1 : arr[index] + 1;
    }

    for (let i = 0; i < n; i++) {
        const index = s[i].charCodeAt(0) - "a".charCodeAt(0);
        if (arr[index] === 1) {
            return i;
        }
    }

    return -1;
}
