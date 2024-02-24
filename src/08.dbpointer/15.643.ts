export function findMaxAverage(nums: number[], k: number): number {
    let res = 0;
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    res = sum;

    for (let i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i - k];
        res = Math.max(res, sum);
    }

    return res / k;
}
