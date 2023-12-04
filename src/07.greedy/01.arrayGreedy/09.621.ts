export function leastInterval(tasks: string[], n: number): number {
    const buckets = new Array(26).fill(0);
    for (let i = 0; i < tasks.length; i++) {
        buckets[tasks[i].charCodeAt(0) - "A".charCodeAt(0)]++;
    }

    buckets.sort((a, b) => a - b);

    let maxTimes = buckets[25];
    let maxCount = 1;

    for (let i = 25; i >= 1; i--) {
        if (buckets[i] === buckets[i - 1]) {
            maxCount++;
        } else {
            break;
        }
    }

    const res = (maxTimes - 1) * (n + 1) + maxCount;

    return Math.max(res, tasks.length);
}
