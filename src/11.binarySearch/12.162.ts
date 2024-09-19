// 暴力解法
export function findPeakElement1(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            if (nums[i] > nums[i + 1]) {
                return i;
            }
        } else if (i === nums.length - 1) {
            if (nums[i] > nums[i - 1]) {
                return i;
            }
        } else {
            if (nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) {
                return i;
            }
        }
    }

    return 0;
}

// 二分 log n 解法
export function findPeakElement(nums: number[]): number {
    const n = nums.length;
    let l = 0;
    let r = n - 1;

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);

        // 右侧一定存在峰值
        if (nums[mid] < nums[mid + 1]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return l;
}
