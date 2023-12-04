export function exclusiveTime(n: number, logs: string[]): number[] {
    const res = new Array(n).fill(0);
    const stack: string[] = [];
    let preTime = 0;

    for (let i = 0; i < logs.length; i++) {
        const itemList = logs[i].split(":");
        const curTime = Number(itemList[2]);
        const curIndex = itemList[0];

        if (itemList[1] === "start") {
            if (stack.length) {
                res[stack[stack.length - 1]] += curTime - preTime;
            }
            stack.push(curIndex);
            preTime = curTime;
        } else {
            res[curIndex] += curTime - preTime + 1;
            stack.pop();
            preTime = curTime + 1;
        }
    }

    return res;
}
