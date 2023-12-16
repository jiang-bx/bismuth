export function maxSubArray(nums: number[]): number {
    /**
     
    // 暴力法, 容易超时
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            max = Math.max(max, sum);
        }
    }
    return max;
     */

    /**
    
    // 动态规划
    let res = -Infinity;
    const n = nums.length;
    const dp = new Array(n).fill(0);
    dp[0] = nums[0];
    res = dp[0];

    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        res = Math.max(res, dp[i]);
    }

    return res;
     */

    // 贪心法
    let res = -Infinity;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        res = Math.max(res, sum);
        if (sum < 0) {
            sum = 0;
        }
    }

    return res;
}
