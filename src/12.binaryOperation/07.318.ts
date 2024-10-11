// 暴力解法 - 超时
export function maxProduct1(words: string[]): number {
    const n = words.length;
    let ans = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            const set = new Set(words[i]);
            let isExist = false;
            for (const ch of words[j]) {
                if (set.has(ch)) {
                    isExist = true;
                    break;
                }
            }

            if (!isExist) {
                ans = Math.max(ans, words[j].length * words[i].length);
            }
        }
    }

    return ans;
}

// 暴力解法 - 超时
export function maxProduct(words: string[]): number {
    const n = words.length;
    const nums: number[] = [];

    for (const word of words) {
        // 一共 26 个字母, 出现过, 当前位记为 1
        let val = 0;
        for (const ch of word) {
            // 出现, 对应的位置记为 1
            const pos = 1 << (ch.charCodeAt(0) - "a".charCodeAt(0));
            // 合并, 按位或 |, 一真则真, 只有 1 返回 1
            val |= pos;
        }

        nums.push(val);
    }

    let ans = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            // 按位与, 一假则假, 只要有 0 返回 0
            if ((nums[i] & nums[j]) === 0) {
                ans = Math.max(ans, words[j].length * words[i].length);
            }
        }
    }

    return ans;
}
