export function search81_1(nums: number[], target: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return true;
        }
    }
    return false;
}

export function search81(nums: number[], target: number): boolean {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);

        if (nums[mid] === target) {
            return true;
        }

        // 去除重复
        if (nums[l] === nums[mid]) {
            l++;
            continue;
        }

        if (nums[mid] > nums[l]) {
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

    return false;
}
