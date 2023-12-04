export function findPairs(nums: number[], k: number): number {
    const set = new Set<string>();
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (
                Math.abs(nums[i] - nums[j]) === k &&
                (!set.has(`${nums[i]}-${nums[j]}`) ||
                    !set.has(`${nums[j]}-${nums[i]}`))
            ) {
                count++;
                set.add(`${nums[i]}-${nums[j]}`);
                set.add(`${nums[j]}-${nums[i]}`);
            }
        }
    }
    return count;
}
