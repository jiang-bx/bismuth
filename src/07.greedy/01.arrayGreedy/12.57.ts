import { it } from "node:test";

export function insert(
    intervals: number[][],
    newInterval: number[]
): number[][] {
    /** 笨办法
     let idx = 0;
    for (let i = 0; i < intervals.length; i++) {
        if (idx === 1) {
            break;
        }
        const item = intervals[i];
        if (item[0] >= newInterval[0] && item[0] <= newInterval[1]) {
            item[0] = Math.min(item[0], newInterval[0]);
            item[1] = Math.max(item[1], newInterval[1]);
            idx = 1;
        } else if (item[1] >= newInterval[0] && item[1] <= newInterval[1]) {
            item[1] = Math.max(item[1], newInterval[1]);
            idx = 1;
        }
    }

    console.log(intervals);

    if (idx === 0) {
        intervals.push(newInterval);
    }

    intervals.sort((a, b) => a[0] - b[0]);

    idx = 0;

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[idx][1] >= intervals[i][0]) {
            intervals[idx][1] = Math.max(intervals[idx][1], intervals[i][1]);
        } else {
            intervals[++idx] = intervals[i];
        }
    }

    return intervals.slice(0, idx + 1);
     */

    /**
    intervals.push(newInterval);

    intervals.sort((a, b) => a[0] - b[0]);

    let idx = 0;

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[idx][1] >= intervals[i][0]) {
            intervals[idx][1] = Math.max(intervals[idx][1], intervals[i][1]);
        } else {
            intervals[++idx] = intervals[i];
        }
    }

    return intervals.slice(0, idx + 1);
    */

    const res: number[][] = [];
    const length = intervals.length;
    let i = 0;

    // 左侧先推入
    while (i < length && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
        i++;
    }

    // 中间有重叠区域的情况
    while (i < length && intervals[i][0] <= newInterval[1]) {
        // 合并
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    res.push(newInterval);

    // 右侧不重叠区域
    while (i < length) {
        res.push(intervals[i]);
        i++;
    }

    return res;
}
