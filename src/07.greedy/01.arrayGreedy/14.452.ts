export function findMinArrowShots(points: number[][]): number {
    const n = points.length;
    if (n <= 1) {
        return n;
    }

    /**
    // 左端排序
    points.sort((a, b) => a[0] - b[0]);
    let res = 1;
    // 求交集思想
    const range = [...points[0]];

    for (let i = 1; i < n; i++) {
        const item = points[i];
        // 有交集, 就获取其交叉区间
        if (item[0] <= range[1]) {
            range[0] = Math.max(range[0], item[0]);
            range[1] = Math.min(range[1], item[1]);
        } else {
            res++;
            range[0] = item[0];
            range[1] = item[1];
        }
    }

    return res;
     */

    // [[2,5],[1, 6],[7,12],[10,16]]
    // 右端排序
    points.sort((a, b) => a[1] - b[1]);

    // 发射点设置在区间最右侧
    let pos = points[0][1];
    let res = 1;

    for (let i = 1; i < n; i++) {
        if (points[i][0] > pos) {
            pos = points[i][1];
            res++;
        }
    }

    return res;
}
