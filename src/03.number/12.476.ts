export function findComplement(num: number): number {
    /**
     * 按位异或, 都为 1 时, 返回 0, 其他情况返回 0
     * 0000 0101
     * ^
     * 0000 0111  // 通过 2^count - 1 计算出来
     * ----------
     * 0000 0010
     */
    // let count = 0;
    // const temp = num;
    // while (num) {
    //     num >>>= 1;
    //     count++;
    // }
    // return temp ^ (Math.pow(2, count) - 1);

    let temp = 1;
    let n = num;
    while (num) {
        num >>>= 1;
        // temp *= 2
        temp <<= 1;
    }
    return (temp - 1) ^ n;
}
