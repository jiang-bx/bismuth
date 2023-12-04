export function findLHS(nums: number[]): number {
    // 排序 + 双指针
    // const arr = nums.sort((a, b) => a - b);
    // let ans = 0;

    // for (let i = 0, j = 0; j < arr.length; j++) {
    //     while (i < j && nums[j] - nums[i] > 1) {
    //         i++;
    //     }

    //     if (nums[j] - nums[i] === 1) {
    //         ans = Math.max(ans, j - i + 1);
    //     }
    // }

    // return ans;

    // map 统计
    const map = new Map<number, number>();
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        if (map.has(v)) {
            map.set(v, map.get(v) + 1);
        } else {
            map.set(v, 1);
        }
    }

    for (const k of map.keys()) {
        if (map.has(k - 1)) {
            ans = Math.max(ans, map.get(k) + map.get(k - 1));
        }
    }

    return ans;
}
