export function arrayPairSum(nums: number[]): number {
    nums = nums.sort((a, b) => {
        return a - b;
    });
    let sum = 0;
    console.log(nums);
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    return sum;
}
