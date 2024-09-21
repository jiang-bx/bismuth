export function findMinHard(nums: number[]): number {
    const n = nums.length;
    let l = 0;
    let r = n - 1;
    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (nums[mid] > nums[n - 1]) {
            l = mid + 1; // 取后半段
        } else {
            r = mid; // 取前半段
        }
    }

    return nums[l];
}
