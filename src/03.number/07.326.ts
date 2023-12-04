export function isPowerOfThree(n: number): boolean {
    /**
    while (n > 0 && n % 3 === 0) {
        n = Math.floor(n / 3);
    }
    return n === 1;
     */

    // while (n > 1) {
    //     n /= 3;
    // }
    // return n === 1;

    // return n > 0 && 1162261467 % n == 0;

    // 转为三进制
    if (n <= 0) {
        return false;
    }
    const str = n.toString(3);
    const rn = parseInt(str.split("").reverse().join(""));
    return rn === 1;
}
