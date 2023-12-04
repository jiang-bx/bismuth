export function containsNearbyAlmostDuplicate(
    nums: number[],
    indexDiff: number,
    valueDiff: number
): boolean {
    // const len = nums.length;
    // for (let i = 0; i < len - 1; i++) {
    //     for (let j = i + 1; j < len; j++) {
    //         if (
    //             Math.abs(i - j) <= indexDiff &&
    //             Math.abs(nums[i] - nums[j]) <= valueDiff
    //         ) {
    //             return true;
    //         }
    //     }
    // }
    // return false;

    // key 为桶编号, value 为该桶内的元素
    // 为了保证分到同个桶内的数字必定满足 abs(a - b) <= valueDiff
    // 所以桶容量 w 为 valueDiff + 1
    const bucketMap = new Map<number, number>();
    const w = valueDiff + 1;

    function getBucketId(num: number) {
        // 例如:  w === 3
        // 则 0 1 2 -> 0, -1 -2 -3 -> -1
        // 由此可得
        if (num >= 0) {
            return Math.floor(num / w);
        } else {
            return Math.floor((num + 1) / w) - 1;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        const bucketId = getBucketId(item);

        //  目标桶已存在（桶不为空），说明前面已有 [u - t, u + t] 范围的数字
        if (bucketMap.has(bucketId)) {
            return true;
        }

        // 检查相邻的桶
        const l = bucketId - 1;
        const r = bucketId + 1;

        if (bucketMap.has(l) && item - bucketMap.get(l) <= valueDiff) {
            return true;
        }
        if (bucketMap.has(r) && bucketMap.get(r) - item <= valueDiff) {
            return true;
        }

        // 建立目标桶
        bucketMap.set(bucketId, item);

        // 移出下标范围不在 [max(0, i-indexDiff), i] 内的桶
        if (i >= indexDiff) {
            bucketMap.delete(getBucketId(nums[i - indexDiff]));
        }
    }

    return false;
}
