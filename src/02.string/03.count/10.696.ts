// s 由 '0' 和 '1' 组成
export function countBinarySubstrings(s: string): number {
    /** 不行的解法
    const n = s.length;
    let count = 0;

    for (let i = 0; i < n - 1; i++) {
        if (s[i] !== s[i + 1]) {
            console.log("单个", i);
            console.log(s[i]);
            console.log(s[i + 1]);
            count++;
            continue;
        }

        let continueIndex = i + 1;
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                continueIndex = j;
            } else {
                break;
            }
        }

        let continueNoIndex = continueIndex + 1;
        for (let k = continueIndex + 1; k < n; k++) {
            if (s[i] !== s[k]) {
                continueNoIndex = k;
            } else {
                break;
            }
        }

        if (
            continueNoIndex - (continueIndex + 1) >=
            continueIndex - i
        ) {
            console.log("多个", i);
            console.log(s[i]);
            console.log(s[i + 1]);
            count++;
        }
    }

    return count;
     */

    const n = s.length;
    let ptr = 0;
    let res = 0;
    let last = 0;
    while (ptr < n) {
        const c = s[ptr];
        let count = 0;
        while (ptr < n && s[ptr] === c) {
            ptr++;
            count++;
        }
        res += Math.min(count, last);
        last = count;
    }

    return res;
}
