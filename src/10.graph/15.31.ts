export function nextPermutation(nums: number[]): void {
    const n = nums.length;
    let i = n - 2;
    let j = n - 1;
    let k = n - 1;

    while (i >= 0 && nums[i] >= nums[j]) {
        i--;
        j--;
    }

    // 找到下一个排列
    if (i >= 0) {
        while (nums[i] >= nums[k]) {
            k--;
        }
        [nums[i], nums[k]] = [nums[k], nums[i]];
    }

    for (let i = j, l = n - 1; i < l; i++, l--) {
        [nums[i], nums[l]] = [nums[l], nums[i]];
    }
}
