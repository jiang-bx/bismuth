export function subarraySum(nums: number[], k: number): number {
    // 暴力解法
    // let count = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     let sum = 0;
    //     for (let j = i; j < nums.length; j++) {
    //         sum += nums[j];
    //         if (sum === k) {
    //             count++;
    //         }
    //     }
    // }
    // return count;

    // 利用前缀和
    // const sums = [0];
    // for (let i = 0; i < nums.length; i++) {
    //     sums[i + 1] = sums[i] + nums[i];
    // }

    // let count = 0;
    // for (let i = 0; i < sums.length; i++) {
    //     for (let j = i; j < sums.length; j++) {
    //         if (sums[j + 1] - sums[i] === k) {
    //             count++;
    //         }
    //     }
    // }
    // return count;

    // 利用 map 优化前缀和
    const map = new Map<number, number>();
    map.set(0, 1);

    let sum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}
