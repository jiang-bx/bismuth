export function hammingDistance(x: number, y: number): number {
    /**
     * 0001
     *^0100
     * ----
     * 0101
     *
     * 0001
     *^0011
     * ----
     * 0010
     *
     * 0100
     *^0011
     * ----
     * 0111
     */

    // 汉明距离: 二进制位中, 同位不相同的 的数量
    // 1 (0 0 0 1)
    // 4 (0 1 0 0)
    // -----------
    //      1   1  = 2

    // console.log(4 ^ 3);
    let num = x ^ y;
    let count = 0;
    while (num) {
        // count += num & 1;
        // num >>>= 1;

        // 高效方法
        num &= (num - 1)
		count++
    }

    return count;
}
