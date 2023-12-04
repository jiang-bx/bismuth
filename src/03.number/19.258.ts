export function addDigits(num: number): number {
    // 递归解法
    // const getDigites = (n: number) => {
    //     let res = 0;
    //     while (n > 0) {
    //         res += n % 10;
    //         n = Math.floor(n / 10);
    //     }
    //     return res;
    // };
    // let ans = getDigites(num);
    // if (ans >= 10) {
    //     return addDigits(ans);
    // }
    // return ans;

    // 数学解法: 求一个数的树根
    // 原数: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
    // 数根: 1 2 3 4 5 6 7 8 9  1  2  3  4  5  6  7  8  9  1  2  3  4  5  6  7  8  9  1  2  3

    return ((num - 1) % 9) + 1;
}
