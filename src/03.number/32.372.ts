const myPow = (m: number, n: number): number => {
    // let res = 1;
    // m %= 1337;
    // for (let i = 0; i < n; i++) {
    //     res *= m;
    //     res %= 1337;
    // }
    // return res;

    // 高效求幂
    // a^b = ?
    // b 为奇数时, a^b = a * a^(b-1)
    // b 为偶数时, (a^(b/2))^2
    if (n === 0) {
        return 1;
    }

    m %= 1337;
    if (n % 2 === 1) {
        return (m * myPow(m, n - 1)) % 1337;
    } else {
        const sub = myPow(m, n / 2);
        return (sub * sub) % 1337;
    }
};

export function superPow(a: number, b: number[]): number {
    // a^112 = a^2 * a^110 = a^2 * (a^11)^10
    // a*b*c%d = (a%d * b%d * c%d) %d
    // 对乘法的结果求模，等价于先对每个因子都求模，然后对因子相乘的结果再求模。

    const bLen = b.length;

    if (!bLen) {
        return 1;
    }

    const last = b.pop();
    const ans1 = myPow(a, last);
    const ans2 = myPow(superPow(a, b), 10);

    return (ans1 * ans2) % 1337;
}
