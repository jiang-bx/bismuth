export function merge(intervals: number[][]): number[][] {
    // 排序
    intervals.sort((a, b) => a[0] - b[0]);

    let i = 0;

    for (let j = 1; j < intervals.length; j++) {
        if (intervals[i][1] >= intervals[j][0]) {
            intervals[i][1] = Math.max(intervals[i][1], intervals[j][1]);
        } else {
            i++;
            intervals[i] = intervals[j];
        }
    }

    return intervals.slice(0, i + 1);
}
