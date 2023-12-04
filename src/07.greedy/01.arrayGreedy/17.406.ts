export function reconstructQueue(people: number[][]): number[][] {
    const n = people.length;

    // 排序, 按照升高 从大到小排序, 如果相同, 按照 k 从小到大排序
    people.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return b[0] - a[0];
    });

    const res: number[][] = [];
    for (let i = 0; i < n; i++) {
        // 将 该元素插入到 k 的位置
        res.splice(people[i][1], 0, people[i]);
    }

    return res;
}
