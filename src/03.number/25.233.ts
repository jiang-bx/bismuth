export function countDigitOne(n: number): number {
    let digit = 1;
    let res = 0;
    let high = Math.floor(n / 10);
    let cur = n % 10;
    let low = 0;

    // hight 与 cur 同时为 0, 结束循环
    while (high != 0 || cur != 0) {
        if (cur === 0) {
            res += high * digit;
        } else if (cur === 1) {
            res += high * digit + low + 1;
        } else {
            res += (high + 1) * digit;
        }

        low += cur * digit;
        cur = high % 10;
        high = Math.floor(high / 10);
        digit *= 10;
    }

    return res;
}
