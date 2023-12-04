export function fourSum(nums: number[], target: number): number[][] {
    const ans: number[][] = [];
    if (nums.length < 4) {
        return ans;
    }

    nums.sort((a, b) => a - b);

    const n = nums.length;

    for (let k = 0; k < n - 3; k++) {
        // 与前一个值相等时, 忽略
        if (k > 0 && nums[k] === nums[k - 1]) {
            continue;
        }

        // 获取当前最小值
        const minK = nums[k] + nums[k + 1] + nums[k + 2] + nums[k + 3];
        if (minK > target) {
            // 后面的值越来越大不符合条件
            break;
        }

        // 获取当前最大值
        const maxK = nums[k] + nums[n - 1] + nums[n - 2] + nums[n - 3];
        if (maxK < target) {
            // 后面的值越来越小不符合条件
            continue;
        }

        for (let i = k + 1; i < n - 2; i++) {
            if (i > k + 1 && nums[i] === nums[i - 1]) {
                continue;
            }

            let j = i + 1;
            let h = n - 1;

            const curMin = nums[k] + nums[i] + nums[j] + nums[j + 1];
            if (curMin > target) {
                break;
            }

            const curMax = nums[k] + nums[i] + nums[h] + nums[h - 1];
            if (curMax < target) {
                continue;
            }

            // j 与 h 双指针, 计算当前和
            while (j < h) {
                const cur = nums[k] + nums[i] + nums[j] + nums[h];

                if (cur === target) {
                    ans.push([nums[k], nums[i], nums[j], nums[h]]);

                    // 等于目标值时, j++, h--
                    j++;
                    while (j < h && nums[j] === nums[j - 1]) {
                        j++;
                    }

                    h--;
                    while (j < h && nums[h] === nums[h + 1]) {
                        h--;
                    }
                } else if (cur > target) {
                    h--;
                } else {
                    j++;
                }
            }
        }
    }

    return ans;
}
