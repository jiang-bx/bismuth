export function findMinMoves(machines: number[]): number {
    // 无解情况
    // 衣服数量不能整除洗衣机数量 返回 -1

    const n = machines.length;
    let sum = 0;
    for (let v of machines) {
        sum += v;
    }

    if (sum % n !== 0) {
        return -1;
    }

    // 每个洗衣机中的衣服数量
    let t = sum / n;

    // 左侧衣服数量
    let ls = 0;

    // 右侧衣服数量
    let rs = sum;
    let ans = 0;

    for (let i = 0; i < n; i++) {
        rs -= machines[i];

        const a = Math.max(t * i - ls, 0);
        const b = Math.max((n - i - 1) * t - rs, 0);
        ans = Math.max(ans, a + b);
        ls += machines[i];
    }

    return ans;
}
