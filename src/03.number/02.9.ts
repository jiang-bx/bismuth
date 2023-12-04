export function isPalindrome(x: number): boolean {
    /**
    // 转为字符
    if (x < 0) {
        return false;
    }

    const s = x + "";
    const n = s.length;

    for (let i = 0; i < n / 2; i++) {
        if (s[i] !== s[n - 1 - i]) {
            return false;
        }
    }

    return true;
     */

    // api
    /**
    if (x < 0) {
        return false;
    }

    const s = x + "";

    return s.split("").reverse().join("") === s;
     */

    // 翻转一般数字进行比较
    // 排除负数, 以及 10 的整数倍
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reverseNum = 0;
    while (x > reverseNum) {
        reverseNum = reverseNum * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    // 奇数时, 例如 121,  reverseNum = 12 需要将 2 去掉, 也就是 121 中间的数
    return reverseNum === x || x === Math.floor(reverseNum / 10);
}
