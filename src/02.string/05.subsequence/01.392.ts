export function isSubsequence(s: string, t: string): boolean {
    const n = t.length;
    const m = s.length;
    let sIndex = 0;
    for (let i = 0; i < n && sIndex < m; i++) {
        if (s[sIndex] === t[i]) {
            sIndex++;
        }
    }

    return sIndex === m;
}
