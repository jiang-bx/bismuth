export function threeSum(nums: number[]): number[][] {
    const res = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        // 由于从大到小排序过, so > 0 时, 和不可能为 0
        if (nums[i] > 0) {
            break;
        }

        // 排除重复项
        if (i >= 1 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                res.push([nums[i], nums[left], nums[right]]);

                // 去除重复项
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                // 继续向中间查找
                left++;
                right--;
            }
        }
    }

    return res;
}
