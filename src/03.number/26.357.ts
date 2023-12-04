export function countNumbersWithUniqueDigits(n: number): number {
    // if (n === 0) {
    //     return 1;
    // }

    // if (n === 1) {
    //     return 10;
    // }

    // let res = 10;
    // let temp = 9;
    // let factor = 9;
    // for (let i = 1; i < n; i++) {
    //     factor *= temp;
    //     res += factor;
    //     temp--;
    // }

    // return res;

    // if (n === 0) {
    //     return 1;
    // }

    // let res = 10;
    // for (let i = 2, last = 9; i <= n; i++) {
    //     let cur = last * (10 - i + 1);
    //     res += cur;
    //     last = cur;
    // }
    // return res;

    if (n === 0) {
        return 1;
    }
    let res = 10;
    let temp = 9;

    // n=1: res=10
    // n=2: res=9*9+10=91
    //      两位数第一位只能为1-9，第二位只能为非第一位的数，加上一位数的所有结果
    // n=3: res=9*9*8+91=739
    //     三位数第一位只能为1-9，第二位只能为非第一位的数，第三位只能为非前两位的数，加上两位数的所有结果
    // n=4: res=9*9*8*7+739=5275 同上推法

    for (let i = 1; i < n; i++) {
        temp *= 10 - i;
        res += temp;
    }

    return res;
}
