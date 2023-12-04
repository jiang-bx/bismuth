export function findNthDigit(n: number): number {
    // 比如 11，其实是 12345678910111213141516171819202122.....字符串第11个，就是0啦
    // 1 <= n <= 2^31 - 1
    // 1: 1
    // 11: 1234567891011
    // 111: 12345678910 11 .... 100101
    // 1-9: 1
    // 10-99: 2
    // 100-999: 3
    // 1000-9999: 4

    // 9: 9
    // 10: 1
    // 11: 0
    // 12: 1
    // 13: 2
    // 14: 1
    // 15: 3
    // 16: 1
    // 17: 4
    // 18: 1
    // 19: 5
    // 20: 1
    // 21: 6
    // 22: 1
    // 23: 7
    // 24: 1
    // 25: 8
    // 26: 1
    // 27: 9
    // 28: 2
    // 29: 0
    // 30: 2
    // 22: 99-10+1=90 * 2 + 9 = 189

    let cur = 1;
    let base = 9;

    while (n > cur * base) {
        n -= cur * base;
        cur++;
        base *= 10;
        if (Number.MAX_SAFE_INTEGER / base < cur) {
            break;
        }
    }
    n--;
    const num = Math.pow(10, cur - 1) + Math.floor(n / cur);
    const idx = n % cur;

    return Math.floor(num / Math.pow(10, cur - 1 - idx)) % 10;
}
