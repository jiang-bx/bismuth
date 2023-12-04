export function divide(dividend: number, divisor: number): number {
    const INT_MIN = 1 << 31;
    const INT_MAX = -(INT_MIN + 1);

    // 倍增
    const div = (dd: number, dr: number): number => {
        if (dd < dr) {
            return 0;
        }

        let temp = dr;
        let cnt = 1;

        while (dd >= temp + temp) {
            temp = temp + temp;
            cnt = cnt + cnt;
        }

        return cnt + div(dd - temp, dr);
    };

    if (divisor === 1) {
        return dividend;
    }

    if (divisor === -1) {
        return dividend > INT_MIN ? -dividend : INT_MAX;
    }

    let sign = 1;
    if (dividend < 0) {
        sign = -sign;
        // TODO: -intmin to intmax 整型溢出
        dividend = -dividend;
    }

    if (divisor < 0) {
        sign = -sign;
        // TODO: -intmin to intmax 整型溢出
        divisor = -divisor;
    }

    let res = div(dividend, divisor);

    if (sign > 0) {
        return res > INT_MAX ? INT_MAX : res;
    } else {
        return -res;
    }
}
