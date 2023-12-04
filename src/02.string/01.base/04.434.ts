export function countSegments(s: string): number {
    const n = s.length;

    let count = 0;
    for (let i = 0; i < n; i++) {
        if ((i === 0 || s[i - 1] === " ") && s[i] !== " ") {
            count++;
        }
    }

    return count;
}
