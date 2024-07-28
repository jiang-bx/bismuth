/**
 * 超时算法
 * @param s
 * @returns
 */
export function numberOfSubstrings1(s: string): number {
    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        let oneCount = 0;
        let zeroCount = 0;
        for (let j = i; j < s.length; j++) {
            if (s[j] === "1") {
                oneCount++;
            } else {
                zeroCount++;
            }

            if (oneCount >= zeroCount * zeroCount) {
                ans++;
            }
        }
    }

    return ans;
}

export function numberOfSubstrings(s: string): number {
    let ans = 0;
    const n = s.length;
    const zero: number[] = [];
    for (let i = 0; i < n; i++) {
        if (s[i] === "0") {
            zero.push(i);
        }
    }

    const total1 = n - zero.length;

    zero.push(n);

    for (let left = 0; left < n; left++) {
        if (s[left] === "1") {
            ans += zero[0] - left;
        }

        for (let k = 0; k < zero.length - 1; k++) {
            const j = zero[k];
            const cnt0 = k + 1;

            if (cnt0 * cnt0 > total1) {
                break;
            }

            const cnt1 = j - left - k;
            const m = Math.max(0, cnt0 * cnt0 - cnt1);
            ans += Math.max(0, zero[k + 1] - j - m);
        }

        if (s[left] === "0") {
            zero.shift();
        }
    }

    return ans;
}
