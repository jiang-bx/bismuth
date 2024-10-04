export function grayCode(n: number): number[] {
    // n 位格雷编码, 2^n-1

    // 范围: [0, 2^n -1 ]
    // 第一个为 0
    // 不能重复
    // 相邻整数的 二进制恰好 一 位不同,
    // 第一个和最后一个的 二进制恰好 一 位不同

    // 返回 n 位 格雷码序列
    // 1 <= n <= 16
    const ans: number[] = [0];
    let head = 1;
    for (let i = 0; i < n; i++) {
        const res = [...ans];
        for (let j = res.length - 1; j >= 0; j--) {
            ans.push(head + res[j]);
        }
        head <<= 1;
    }

    return ans;
}
