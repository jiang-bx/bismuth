export function hIndex(citations: number[]): number {
    const n = citations.length;
    let l = 1;
    let r = n;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);

        if (citations[n - mid] >= mid) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return r;
}
