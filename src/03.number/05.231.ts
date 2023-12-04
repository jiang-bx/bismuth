export function isPowerOfTwo(n: number): boolean {
    // 根据对数公式计算: n = 2^x => log2^n = x
    // return Number.isInteger(Math.log2(n));

    // 根据位运算
    // 当 n = 2^x 时, 一定满足:
    //  1. n > 0: 2^0 = 1, 2^-1 = 1/2
    //  2. n 的二进制最高位为 1, 其余位为 0
    //  3. n - 1 的二进制最高位为 0, 其余位为 1

    // 1000
    //     &
    // 0111
    //------
    // 0000


    // & 按位与: 一假则假
    return n > 0 && (n & (n - 1)) === 0;
}
