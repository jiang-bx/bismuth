// a = a 最长子序列
// b = b 最长子序列
// 最长特殊子序列, 为 a 独有 或者 b 独有的最长子序列

export function findLUSLength(a: string, b: string): number {
    return a === b ? -1 : Math.max(a.length, b.length);
}
