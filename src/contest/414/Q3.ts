export function findMaximumScore(nums: number[]): number {
    const n = nums.length;
    let ans = 0;
    let i = 0;

    for (let j = 1; j < n; j++) {
        if (j == n - 1 || nums[j] > nums[i]) {
            ans += nums[i] * (j - i);
            i = j;
        }
    }

    return ans;
}
