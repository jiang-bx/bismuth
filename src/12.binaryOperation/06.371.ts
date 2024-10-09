export function getSum1(a: number, b: number): number {
    let ans = 0;
    let t = 0;
    for (let i = 0; i < 32; i++) {
        let u1 = (a >> i) & 1;
        let u2 = (b >> i) & 1;

        // x & 1 得到 0 或者 1

        if (u1 === 1 && u2 === 1) {
            ans |= t << i;
            t = 1;
        } else if (u1 === 1 || u2 === 1) {
            ans |= (1 ^ t) << i;
        } else {
            ans |= t << i;
            t = 0;
        }
    }

    return ans;
}

export function getSum(a: number, b: number): number {
    return b === 0 ? a : getSum(a ^ b, (a & b) << 1);
}
