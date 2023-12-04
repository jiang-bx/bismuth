export function convertToBase7(num: number): string {
    /**
     * 13 转为 二进制
     * 13 / 2 = 6, 13%2=1
     * 6 / 2 = 3, 6%2=0
     * 3 / 2 = 1, 3%2=1
     * 1 / 2 = 0, 1%2=1
     * 13 的二进制为倒序排列: 1101
     */

    /**
     * 15 转为 七进制
     * 15 / 7 = 2, 15 % 7 = 1
     * 2 / 7 = 0,  2 % 7 = 2
     *
     * 15 的 7 进制倒序: 21
     */

    /**
     * 10 / 7 = 1, 10%7 = 3
     * 1 / 7 = 0, 1%7=1
     * res: 13
     */

    /**
     * 7 / 7 = 1, 7%7=0
     * 1 / 7 = 0, 1%7=1
     * res: 10
     */

    /**
     * 8 / 7 = 1, 8%7=1
     * 1 / 7 = 0, 1%7=1
     * res: 11
     */

    // 通过递归计算
    // if (num === 0) {
    //     return "0";
    // }

    // const base = 7;
    // let res = "";
    // let n = Math.abs(num);
    // while (n !== 0) {
    //     const a = n % base;
    //     n = Math.floor(n / base);
    //     res = a + res;
    // }

    // if (num < 0) {
    //     res = "-" + res;
    // }

    // return res;

    // 利用 api 计算
    // return num.toString(7);

    if (num === 0) return "0";
    let pre = num > 0 ? "" : "-";
    let str = "";
    num = Math.abs(num);
    while (num > 0) {
        str = (num % 7) + str;
        num = ~~(num / 7);
    }

    return pre + str;
}
