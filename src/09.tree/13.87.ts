export function isScramble(s1: string, s2: string): boolean {
    if (s1 === s2) {
        return true;
    }

    const str1 = Array.from(s1).sort().join("");
    const str2 = Array.from(s2).sort().join("");

    // 检查所有元素是否相同
    if (str1 != str2) {
        return false;
    }

    const n = s1.length;

    for (let i = 1; i < n; i++) {
        let case1 =
            isScramble(s1.slice(0, i), s2.slice(0, i)) &&
            isScramble(s1.slice(i), s2.slice(i));

        let case2 =
            isScramble(s1.slice(0, i), s2.slice(n - i)) &&
            isScramble(s1.slice(i), s2.slice(0, n - i));

        if (case1 || case2) {
            return true;
        }
    }

    return false;
}
