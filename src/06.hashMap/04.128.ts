export function longestConsecutive(nums: number[]): number {
    const set = new Set<number>();

    for (const num of nums) {
        set.add(num);
    }

    let longest = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let curNum = num;
            let curLong = 1;

            while (set.has(curNum + 1)) {
                curNum += 1;
                curLong += 1;
            }

            longest = Math.max(longest, curLong);
        }
    }

    return longest;
}
