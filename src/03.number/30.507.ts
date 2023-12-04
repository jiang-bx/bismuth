export function checkPerfectNumber(num: number): boolean {
    // let res = 0;
    // let i = 1;

    // while (num > i && res <= num) {
    //     if (num % i === 0) {
    //         res += i;
    //     }
    //     i++;
    // }

    // return res === num;

    if (num === 1) {
        return false;
    }

    let ans = 1;
    for (let i = 2; i <= num / i; i++) {
        if (num % i === 0) {
            // 正因数都是成对出现的
            // 加左侧的
            ans += i;

            // 排除 类似 6 * 6 = 36 的结果, 只需要一个 6
            if (i * i != num) {
                // 加右侧的
                ans += num / i;
            }
        }
    }

    return ans === num;
}
