export function maxPossibleScore(start: number[], d: number): number {
    start.sort((a, b) => a - b);
    const n = start.length;
    const check = (mid: number) => {
        let last = start[0];
        for (let i = 1; i < n; i++) {
            const rS = start[i];
            const rE = start[i] + d;

            if (last + mid <= rE) {
                last = Math.max(last + mid, rS);
            } else {
                return false;
            }
        }
        return true;
    };

    let res = 0;
    let l = 0;
    let r = start[n - 1] + d - start[0];

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (check(mid)) {
            res = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return res;
}
