export function findRightInterval(intervals: number[][]): number[] {
    const n = intervals.length;

    for (let i = 0; i < n; i++) {
        intervals[i].push(i);
    }

    intervals.sort((a, b) => a[0] - b[0]);

    const ans = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        const interval = intervals[i];

        let l = 0;
        let r = n;
        while (l < r) {
            const mid = l + Math.floor((r - l) / 2);
            if (intervals[mid][0] < interval[1]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }

        ans[interval[2]] = l < n ? intervals[l][2] : -1;
    }

    return ans;
}
