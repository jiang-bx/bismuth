export function longestPalindrome(s: string): number {
    const n = s.length;
    const m = new Array(128).fill(0);
    let c = 0;

    for (let i = 0; i < n; i++) {
        const code = s.charCodeAt(i);
        m[code]++;
        if (m[code] % 2 === 0) {
            c += 2;
        }
    }

    if (c < n) {
        c++;
    }

    return c;
}
