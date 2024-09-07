export function searchRange1(nums: number[], target: number): number[] {
    const n = nums.length;
    let l = 0;
    let r = n - 1;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (nums[mid] === target) {
            // 向后寻找
            let i = mid;
            while (i < n && nums[i] == target) {
                i++;
            }

            let j = mid;
            while (j >= 0 && nums[j] == target) {
                j--;
            }

            return [j + 1, i - 1];
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return [-1, -1];
}

export function searchRange(nums: number[], target: number): number[] {
    const start = lowerBound(nums, target);
    if (start === nums.length || nums[start] !== target) {
        return [-1, -1];
    }
    const end = lowerBound(nums, target + 1) - 1;
    return [start, end];
}

function lowerBound(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (nums[mid] < target) {
            // [mid+1, r]
            l = mid + 1;
        } else {
            // [l, mid-1]
            r = mid - 1;
        }
    }

    // [l, r]

    return l;
}
