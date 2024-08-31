export function findOrder(
    numCourses: number,
    prerequisites: number[][]
): number[] {
    // 计算入度
    const inDrgees = new Array(numCourses).fill(0);

    const map = new Map<number, number[]>();

    for (const val of prerequisites) {
        const [end, start] = val;

        inDrgees[end]++;
        if (map.has(start)) {
            map.get(start).push(end);
        } else {
            map.set(start, [end]);
        }
    }

    const queue: number[] = [];

    for (let i = 0; i < inDrgees.length; i++) {
        if (inDrgees[i] === 0) {
            queue.push(i);
        }
    }

    const res: number[] = [];

    while (queue.length) {
        const cur = queue.shift();

        res.push(cur);

        if (!map.has(cur)) {
            continue;
        }

        map.get(cur).forEach((item) => {
            inDrgees[item]--;
            if (inDrgees[item] === 0) {
                queue.push(item);
            }
        });
    }

    return res.length === numCourses ? res : [];
}
