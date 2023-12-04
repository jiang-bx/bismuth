// a 叠加 t 次后得到字符串 s,
// b 能否成为 s 的子串
// 求 t 的最小值
export function repeatedStringMatch(a: string, b: string): number {
    const arr = new Array(26).fill(0)

    for (let i = 0; i < a.length; i++) {
        arr[a[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 1
    }

    for (let i = 0; i < b.length; i++) {
        if (!arr[b[i].charCodeAt(0) - 'a'.charCodeAt(0)]) {
            return -1
        }
    }

    let count = Math.floor(b.length / a.length)

    let sb = a.repeat(count)

    for (let i = 0; i <= 2; i++) {
        if (sb.indexOf(b) >= 0) {
            return count + i;
        }
        sb += a
    }

    return -1
}
