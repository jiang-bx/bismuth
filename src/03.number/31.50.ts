export function myPow(x: number, n: number): number {
    // if (x === 0) {
    //     return 0.0;
    // }

    // let res = 1.0;
    // if (n < 0) {
    //     x = 1 / x;
    //     n = -n;
    // }

    // while (n > 0) {
    //     if ((n & 1) === 1) {
    //         res *= x;
    //     }
    //     x *= x;
    //     n >>>= 1;
    // }

    // return Number(res.toFixed(5));

    // 高效求幂
    // a^b = ?
    // b 为奇数时, a^b = a * a^(b-1)
    // b 为偶数时, (a^(b/2))^2

    if (n === 0 || n === 1) {
        return n === 0 ? 1 : x;
    } else if (n < 0) {
        return myPow(1 / x, -n);
    } else {
        return n & 1 ? myPow(x * x, n >>> 1) * x : myPow(x * x, n >>> 1);
    }
}
