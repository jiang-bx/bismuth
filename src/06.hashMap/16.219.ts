export function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        if (map.has(item)) {
            if (Math.abs(map.get(item) - i) <= k) {
                return true;
            }
        }

        map.set(item, i);
    }

    return false;
}
