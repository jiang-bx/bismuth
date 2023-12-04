export function findMinDifference(timePoints: string[]): number {
    const n = timePoints.length;
    const maxTime = 24 * 60;

    // 抽屉原理, 总计共有 1440 个值, 如果超过 1440 个值, 肯定有两个一样的
    if (n > maxTime) {
        return 0;
    }

    // 转为分钟
    const timeMinutes: number[] = [];
    for (let i = 0; i < n; i++) {
        const item = timePoints[i].split(":");
        timeMinutes[i] = Number(item[0]) * 60 + Number(item[1]);
    }

    timeMinutes.sort((a, b) => a - b);

    let min = Math.min(timeMinutes[0] + maxTime - timeMinutes[n - 1], maxTime);
    for (let i = 0; i < n - 1; i++) {
        min = Math.min(timeMinutes[i + 1] - timeMinutes[i], min);
    }

    return min;
}
