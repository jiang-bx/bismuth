export function integerReplacement(n: number): number {
    let ans = 0;
    while (n != 1) {
        if (n > 2) {
            if (n % 2 == 0) {
                n /= 2;
            } else {
                n += 1;
            }
        } else {
            n -= 1;
        }
        ans++;
    }
    return ans;
}
