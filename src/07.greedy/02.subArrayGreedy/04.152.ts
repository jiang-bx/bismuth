export function maxProduct(nums: number[]): number {
    /**
    // 动态规划
    const n = nums.length;

    // 维护积的最大值和最小值
    const maxDp = new Array(n).fill(0);
    const minDp = [...maxDp];
    maxDp[0] = nums[0];
    minDp[0] = nums[0];
    let res = nums[0];

    for (let i = 1; i < n; i++) {
        // 最大积的可能情况有：
        //  1. 元素i自己本身
        //  2. 上一个最大积与i元素累乘
        //  3. 上一个最小积与i元素累乘
        //  4. 与i元素自己进行比较是为了处理i元素之前全都是0的情况；

        const cur = nums[i];
        // 最大值
        maxDp[i] = Math.max(cur, cur * maxDp[i - 1], cur * minDp[i - 1]);

        // 最小值
        minDp[i] = Math.min(cur, cur * maxDp[i - 1], cur * minDp[i - 1]);

        res = Math.max(res, maxDp[i]);
    }

    return res;
     */


    // 基于动态规划的优化
    // 只需维护一个最大和最小乘积
    let minP = nums[0]
    let maxP = nums[0]
    let ans = nums[0]
    let temp = 0

    for (let i = 1; i < nums.length; i++) {
        temp = Math.max(nums[i], nums[i] * minP, nums[i] * maxP)
        minP = Math.min(nums[i], nums[i] * minP, nums[i] * maxP)
        maxP = temp
        ans = Math.max(ans, maxP)
    }

    return ans
}
