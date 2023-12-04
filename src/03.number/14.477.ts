export function totalHammingDistance(nums: number[]): number {
    let len = nums.length;
    let count = 0;
    for (let i = 0; i < 30; i++) {
        let total = 0;
        for (let j = 0; j < len; j++) {
            total += (nums[j] >> i) & 1;
        }
        count += total * (len - total);
    }
    return count;
}
