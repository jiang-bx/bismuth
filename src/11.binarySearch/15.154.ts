export function findMinHard1(nums: number[]): number {
    const n = nums.length;
    let min = nums[0];
    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[i - 1]) {
            return nums[i];
        }
    }
    return min;
}

export function findMinHard(nums: number[]): number {
    const n = nums.length;
    let l = 0;
    let r = n - 1;

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (nums[mid] < nums[r]) {
            r = mid;
        } else if (nums[mid] > nums[r]) {
            l = mid + 1;
        } else {
            r--;
        }
    }

    return nums[l];
}
