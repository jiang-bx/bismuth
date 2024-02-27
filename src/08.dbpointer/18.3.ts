export function lengthOfLongestSubstring(s: string): number {
    // a b c a b c b b
    // 0 1 2 3 4 5 6 7

    // a b c
    // 0 1 2

    // 第二个 a -> map
    // a b c
    // 3 1 2
    // i = Math.max(i, 3)

    // map 记录字符的下标
    // 在更新 i 的时候, 直接找到最大的 下标

    let res = 0;
    let i = -1;
    const hash = new Map<string, number>();

    for (let j = 0; j < s.length; j++) {
        if (hash.has(s[j])) {
            i = Math.max(i, hash.get(s[j]));
        }
        hash.set(s[j], j);
        res = Math.max(res, j - i);
    }

    return res;
}
