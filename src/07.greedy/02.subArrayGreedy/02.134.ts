export function canCompleteCircuit(gas: number[], cost: number[]): number {
    /**
    // 暴力解法
    const n = gas.length;

    // 考虑从每个点出发
    for (let i = 0; i < n; i++) {
        let j = i;
        let remain = gas[i];

        // 当前剩余的油能否到达下一个点
        while (remain - cost[j] >= 0) {

            // 减去花费的油, 加上新的点的补给油
            remain = remain - cost[j] + gas[(j + 1) % n];
            j = (j + 1) % n;

            // 回到了 i
            if (j === i) {
                return i;
            }
        }

        // 最远距离绕道了之前
        if (j < i) {
            return -1;
        }

        i = j;
    }
    return -1;
     */


    // 只要总油量大于等于总耗油量就肯定能跑完一圈，
    // 油的剩余量如果大于等于0就肯定能跑完一圈，
    // 那么总耗油量如果小于0，直接返回-1

    const n = gas.length

    // 总油耗
    let totalNum = 0

    // 当前点的油耗
    let curNum = 0
    let idx = 0

    for (let i = 0; i < n; i++) {
        curNum += gas[i] - cost[i]
        totalNum += gas[i] - cost[i]

        // 当 curNum < 0 时, 油耗不足已到达 i 点
        // 需要重新选择起点, 也就是 i + 1 的点
        if (curNum < 0) {
            idx = (i + 1) % n
            curNum = 0 
        }
    }

    if (totalNum < 0) {
        return -1
    }

    return idx
}
