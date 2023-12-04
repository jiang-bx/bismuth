// 将 strs 分组, 将相同 异位词 分到一起
export function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    // 计数
    for (let i = 0; i < strs.length; i++) {
        // 用 每个单词出现次数做 key
        const arr = new Array(26).fill(0);
        for (let j = 0; j < strs[i].length; j++) {
            console.log(strs[i][j]);
            arr[strs[i][j].charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }
        const key = arr.join(",");
        console.log(key);

        map.has(key) ? map.get(key).push(strs[i]) : map.set(key, [strs[i]]);
    }

    return Array.from(map.values());
}
