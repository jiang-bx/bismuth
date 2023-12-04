// 给定一个整数 n ，
// 返回 可表示为两个 n 位整数乘积的 最大回文整数 。
// 因为答案可能非常大，所以返回它对 1337 取余 。
export function largestPalindrome(n: number): number {
    if (n <= 1) {
        return 9;
    }

    let max = Math.pow(10, n) - 1;

    // 思路: 找到两个 n 位整数的乘积的所有回文串
    for (let i = max; i >= 0; i--) {
        let num = BigInt(i);
        let t = BigInt(i);

        while (t != BigInt(0)) {
            num = num * BigInt(10) + (t % BigInt(10));
            t = t / BigInt(10);
        }

        // 回文数字能否分解为 两个整数 n,
        // 从 最大的 n 位整数开始往下计算,
        // 比如: 9009 % 99 = 0, 可知: 肯定存在 99 * x = 9009, x 为整数
        for (let j = BigInt(max); j * j >= num; j--) {
            if (num % j === BigInt(0)) {
                return Number(num % BigInt(1337));
            }
        }
    }

    return -1;
}
