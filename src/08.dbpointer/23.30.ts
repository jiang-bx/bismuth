export function findSubstring(s: string, words: string[]): number[] {
    const n = s.length;
    const m = words.length;
    const w = words[0].length;

    // 统计 words 中每个单词出现次数
    const need = new Map<string, number>();

    words.forEach((item) => {
        need.set(item, (need.get(item) || 0) + 1);
    });

    const ans = [];

    // barfoothefoobarman, ["foo","bar"]
    // 从 b 开始一次, bar, foo, the, foo 查找一遍
    // 从 a 开始一次, arf, oot, hef, oob 查找一遍
    // 从 r 开始一次, rfo, oth, efo, oba 查找一遍

    for (let i = 0; i < w; i++) {
        let l = i;
        let valid = 0;

        const temp = new Map<string, number>();

        for (let r = i; r + w <= n; r += w) {
            let curR = s.slice(r, r + w);

            if (need.has(curR)) {
                temp.set(curR, (temp.get(curR) || 0) + 1);

                if (temp.get(curR) === need.get(curR)) {
                    valid++;
                }
            }

            if (r + w - l === m * w) {
                if (valid === need.size) {
                    ans.push(l);
                }

                let dele = s.slice(l, l + w);

                l += w;

                if (need.has(dele)) {
                    if (temp.get(dele) === need.get(dele)) {
                        valid--;
                    }

                    temp.set(dele, temp.get(dele) - 1);
                }
            }
        }
    }

    return ans;
}
