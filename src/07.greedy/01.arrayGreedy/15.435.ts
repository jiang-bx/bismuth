export function eraseOverlapIntervals(intervals: number[][]): number {
    const n = intervals.length;
    intervals.sort((a, b) => a[1] - b[1]);

    let pre = intervals[0][1];
    let res = 0;

    for (let i = 1; i < n; i++) {
        if (pre > intervals[i][0]) {
            res++;
        } else {
            pre = intervals[i][1];
        }
    }

    return res;
}
