export function containsDuplicate(nums: number[]): boolean {
    // const hasMap: number[] = [];
    // for (let i = 0; i < nums.length; i++) {
    //     if (!hasMap[nums[i]]) {
    //         hasMap[nums[i]] = 1;
    //     } else {
    //         return true;
    //     }
    // }
    // return false;

    const hashMap = new Set<number>();
    for (const v of nums) {
        if (hashMap.has(v)) {
            return true;
        }
        hashMap.add(v);
    }

    return false;
}
