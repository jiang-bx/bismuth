export function lengthOfLastWord(s: string): number {
    /** 方法一: 从前向后查找
    const n = s.length;
    let lastStartIndex = 0;
    for (let i = 0; i < n; i++) {
        if ((i === 0 || s[i - 1] === " ") && s[i] !== " ") {
            lastStartIndex = i;
        }
    }

    let str = "";

    for (let i = lastStartIndex; i < n; i++) {
        if (s[i] === " ") {
            break;
        }
        str += s[i];
    }

    return str.length;
     */

    // 方法二: 从后向前找, 更简单
    const n = s.length
    let count = 0

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            if (count === 0) {
                continue
            }
            break
        }
        count++
    }

    return count
}
