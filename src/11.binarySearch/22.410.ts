export function splitArray(nums: number[], k: number): number {
    // 分 k 个组, 取每个组的最大值, 取所有组合的最小的最大值
    // 所以: 最大值的范围: max(nums), sum(nums)

    const n = nums.length;
    let l = nums[0];
    let r = 0;

    for (let i = 0; i < n; i++) {
        l = Math.max(l, nums[i]);
        r += nums[i];
    }

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);

        // 计算数组和 最大值 不大于 mid 对应的子数组个数 cnt
        let sum = 0;
        let cnt = 1;
        for (let i = 0; i < n; i++) {
            sum += nums[i];
            if (sum > mid) {
                sum = nums[i];
                cnt++;
            }
        }

        if (cnt > k) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return l;
}
