export function judgeSquareSum(c: number): boolean {
    // 枚举
    // const max = Math.floor(Math.sqrt(c));
    // for (let a = 0; a <= max; a++) {
    //     const b = Math.floor(Math.sqrt(c - a * a));
    //     if (a * a + b * b === c) {
    //         return true;
    //     }
    // }

    // return false;

    // 双指针
    let a = 0;
    let b = Math.floor(Math.sqrt(c));

    while (a <= b) {
        const cur = a * a + b * b;
        if (c === cur) {
            return true;
        } else if (cur > c) {
            b--;
        } else {
            a++;
        }
    }

    return false;
}
