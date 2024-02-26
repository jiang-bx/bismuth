export function minSubArrayLen(target: number, nums: number[]): number {
    /**
     * 2 3 1 2 4 3
     * 0 1 2 3 4 5
     */

    const n = nums.length;
    let res = n + 1;
    let sum = 0;
    let j = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i];
        while (sum >= target) {
            res = Math.min(res, i - j + 1);
            sum -= nums[j++];
        }
    }

    return res > n ? 0 : res;
}
