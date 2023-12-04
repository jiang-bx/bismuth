export function isPowerOfFour(n: number): boolean {
    // 4^x = n => 2^2x = n
    // 4^x = (3 + 1)^x
    return n > 0 && (n & (n - 1)) == 0 && n % 3 === 1;
}
