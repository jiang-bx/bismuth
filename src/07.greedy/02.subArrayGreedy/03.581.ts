export function findUnsortedSubarray(nums: number[]): number {
    const n = nums.length;

    let min = nums[n - 1];
    let max = nums[0];
    let begin = 0;
    let end = -1;

    for (let i = 0; i < n; i++) {
        // 小于max的数，就说明这个数字的位置不对，
        // 这个数字一定是在我们最终要重新sort的
        // 并且是右边界（因为在不断向右探索）
        if (nums[i] < max) {
            end = i;
        } else {
            max = nums[i];
        }

        // 同理,从左向右探索, 找到最小边界值
        if (nums[n - 1 - i] > min) {
            begin = n - 1 - i;
        } else {
            min = nums[n - 1 - i];
        }
    }

    return end - begin + 1;
}
