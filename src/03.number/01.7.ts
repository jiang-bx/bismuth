export function reverse(x: number): number {
    const MAX_VALUE = Math.pow(2, 31) - 1; // 2147483647
    const MIN_VALUE = -Math.pow(2, 31); // -2147483648

    let ans = 0;

    while (x != 0) {
        let pop = x % 10;

        if (ans > MAX_VALUE / 10 || (ans == MAX_VALUE / 10 && pop > 7)) {
            return 0;
        }

        if (ans < MIN_VALUE / 10 || (ans == MIN_VALUE / 10 && pop < -8)) {
            return 0;
        }

        ans = ans * 10 + pop;
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
    }

    return ans;
}
