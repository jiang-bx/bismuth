export function getFinalState(
    nums: number[],
    k: number,
    multiplier: number
): number[] {
    while (k > 0) {
        let min = Infinity;
        let minIndex = -1;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < min) {
                minIndex = i;
                min = nums[i];
            }
        }

        if (minIndex > -1) {
            nums[minIndex] = min * multiplier;
        }
        k--;
    }

    return nums
}
