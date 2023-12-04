export function twoSum1(nums: number[], target: number): number[] {
    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }
    // return [];

    const hashMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (hashMap.has(diff)) {
            return [hashMap.get(diff), i];
        }

        hashMap.set(nums[i], i);
    }
    return [];
}
