export function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let ans = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (Math.abs(target - sum) < Math.abs(target - ans)) {
                ans = sum;
            }

            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return ans;
            }
        }
    }

    return ans;
}
