export function canFinish(
    numCourses: number,
    prerequisites: number[][]
): boolean {
    // 记录入度数组
    const inDegree = new Array(numCourses).fill(0);

    // 图邻接表
    const map: { [key: number]: number[] } = {};

    for (const val of prerequisites) {
        const [end, start] = val;

        // 修 end 时, 必须先修 start
        // start -> end
        // end 的入度就 + 1
        inDegree[end]++;

        // 记录邻接表
        if (map[start]) {
            map[start].push(end);
        } else {
            map[start] = [end];
        }
    }

    const queue: number[] = [];

    inDegree.forEach((item, index) => {
        // 将入度为 0 的课程加入队列
        if (item === 0) {
            queue.push(index);
        }
    });

    let count = 0;

    while (queue.length) {
        const cur = queue.shift();

        // 选课+1
        count++;

        if (map[cur]) {
            map[cur].forEach((item) => {
                inDegree[item]--;
                if (inDegree[item] == 0) {
                    queue.push(item);
                }
            });
        }
    }

    return count === numCourses;
}
