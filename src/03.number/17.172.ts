export function trailingZeroes(n: number): number {
    // 阶乘是一个非常大的数, 整数肯定会溢出
    let count = 0;
    while (n >= 5) {
        // n 中有几个 5
        count += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }
    return count;
}
