export function maxNumber(
    nums1: number[],
    nums2: number[],
    k: number
): number[] {
    let res = [];

    // 从 nums1 中选出长 i 的子序列
    for (let i = 0; i <= k && i <= nums1.length; i++) {
        // 从 nums2 中选出长 k-i 的子序列
        if (k - i >= 0 && k - i <= nums2.length) {
            // 合并
            const temp = merge(
                subMaxNumber(nums1, i),
                subMaxNumber(nums2, k - i)
            );

            // 取最大值
            if (compare(temp, 0, res, 0)) {
                res = temp;
            }
        }
    }

    return res;
}

function subMaxNumber(nums: number[], n: number) {
    const subNums = new Array(n);

    let cur = 0;
    // 还可以删除多少
    let rem = nums.length - n;

    for (let i = 0; i < nums.length; i++) {
        while (cur > 0 && subNums[cur - 1] < nums[i] && rem > 0) {
            cur--;
            rem--;
        }

        if (cur < n) {
            subNums[cur++] = nums[i];
        } else {
            rem--;
        }
    }

    return subNums;
}

function merge(nums1: number[], nums2: number[]) {
    const res = new Array(nums1.length + nums2.length);
    let cur = 0;
    let p1 = 0;
    let p2 = 0;

    while (cur < nums1.length + nums2.length) {
        res[cur++] = compare(nums1, p1, nums2, p2) ? nums1[p1++] : nums2[p2++];
    }
    return res;
}

function compare(nums1: number[], p1: number, nums2: number[], p2: number) {
    if (p2 >= nums2.length) {
        return true;
    }
    if (p1 >= nums1.length) {
        return false;
    }

    if (nums1[p1] > nums2[p2]) {
        return true;
    }

    if (nums1[p1] < nums2[p2]) {
        return false;
    }

    return compare(nums1, p1 + 1, nums2, p2 + 1);
}
