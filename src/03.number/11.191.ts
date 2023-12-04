export function hammingWeight(n: number): number {
    // 遍历
    // let count = 0;
    // for (let i = 0; i < 32; i++) {
    //     if ((n & 1) === 1) {
    //         count++;
    //     }
    // 算术右移 >> 高位用符号位填充
    // 逻辑右移 >>> 高位用 0 填充
    //     n >>>= 1;
    // }
    // return count;

    // 优化遍历
    let count = 0;
    while (n) {
        count += 1
        // 每次消除 n 中的 1 个 1

        /**
         * n = 3
         * 3: 0011
         * &
         * 2: 0010
         * -------
         *    0010
         * &
         *    0001
         * -------
         *    0000
         */
        n = n & (n - 1)
    }
    return count
}
