export function hasAlternatingBits(n: number): boolean {
    // 解法一: 遍历判断
    // let next = -1;
    // while (n) {
    //     let cur = n & 1;
    //     // if ((cur === 1 && next === 1) || (cur === 0 && next === 0)) {
    //     //     return false;
    //     // }
    //     // 优化, 按位异或^ 相同为1, 不同为 0
    //     if ((cur ^ next) === 0) {
    //         return false;
    //     }
    //     next = cur;
    //     n >>>= 1;
    // }
    // return true;

    // 解法二: 利用位运算
    /**
     *    5: 0 1 0 1
     *   ^
     * >> 1: 0 0 1 0
     * --------------
     *    x: 0 1 1 1
     *   &
     *  x+1: 1 0 0 0
     * --------------
     *       0 0 0 0
     */

    // 如果是相互交替的得到的 x 为: 0000 1111 类型
    let x = n ^ (n >> 1);

    // x + 1 得到: 0001 0000 这样的格式
    // 然后与 x 按位且 得到: 0000 0000
    return (x & (x + 1)) === 0;
}
