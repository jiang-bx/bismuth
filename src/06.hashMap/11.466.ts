export function getMaxRepetitions(
    s1: string,
    n1: number,
    s2: string,
    n2: number
): number {
    const len1 = s1.length;
    const len2 = s2.length;
    let index1 = 0;
    let index2 = 0;

    if (len1 === 0 || len2 === 0 || len1 * n1 < len2 * n2) {
        return 0;
    }

    let ans = 0;

    const hashMap = new Map<number, { frist: number; second: number }>();

    while (Math.floor(index1 / len1) < n1) {
        // 在 1 的末尾
        if (index1 % len1 === len1 - 1) {
            if (hashMap.has(index2 % len2)) {
                const cycleLen = index1 - hashMap.get(index2 % len2).frist;
                const cycleNum2 = Math.floor(
                    (index2 - hashMap.get(index2 % len2).second) / len2
                );
                const cycleNum1 = Math.floor(cycleLen / len1);
                const cycle = Math.floor(
                    (n1 - 1 - Math.floor(index1 / len1)) / cycleNum1
                );

                ans += cycle * cycleNum2;
                index1 += cycle * cycleLen;
            } else {
                hashMap.set(index2 % len2, {
                    frist: index1,
                    second: index2,
                });
            }
        }

        if (s1[index1 % len1] === s2[index2 % len2]) {
            if (index2 % len2 === len2 - 1) {
                ans++;
            }
            index2++;
        }
        index1++;
    }

    return Math.floor(ans / n2);
}
