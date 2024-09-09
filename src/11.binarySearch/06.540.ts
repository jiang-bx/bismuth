export function singleNonDuplicate1(nums: number[]): number {
    const n = nums.length;

    for (let i = 0; i < n - 1; i += 2) {
        if (nums[i] != nums[i + 1]) {
            return nums[i];
        }
    }

    return nums[n - 1];
}

export function singleNonDuplicate(nums: number[]): number {
    const n = nums.length;
    let l = 0;
    let r = n - 1;

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);

        // 成对元素中第一个对应的下标必然为 偶数
        // 第二个必然为 奇数

        if (mid % 2 == 0) {
            if (mid + 1 < n && nums[mid] === nums[mid + 1]) {
                // 符合条件
                l = mid + 1;
            } else {
                // 在这之前必有单一元素打乱, 导致顺序出错
                r = mid;
            }
        } else {
            if (mid - 1 >= 0 && nums[mid] === nums[mid - 1]) {
                // 符合条件
                l = mid + 1;
            } else {
                // 同理
                r = mid;
            }
        }
    }

    return nums[r];
}
