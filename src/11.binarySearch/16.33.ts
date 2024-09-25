export function search1(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return i;
        }
    }
    return -1;
}

export function search(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] >= nums[l]) {
            if (target >= nums[l] && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }

    return -1;
}
