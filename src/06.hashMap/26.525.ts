export function findMaxLength(nums: number[]): number {
    /**
     * 利用前缀和
     * nums = [0, 1, 1, 0, 1, 1, 1, 0]
     * 
     * sums: 0 时 - 1, 1 时 + 1
     * sum-0: -1
     * sum-1[0]: -1 - 1 = -2
     * sum-2[1]: -2 + 1 = -1
     * sum-3[2]: -1 + 1 = 0
     * sum-4[3]: 0 - 1 = -1
     * sum-5[4]: -1 + 1 = 0
     * sum-6[5]: 0 + 1 = 1
     * sum-7[6]: 1 + 1 = 2
     * sum-8[7]: 2 + 1 = 3
     * 
     * 
     * 判断一串连续的数组时, sum 经过 +1 或 -1 操作时, sum 是相同的
     */

    let ans = 0,
        sum = 0;

    const map = new Map<number, number>();
    map.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        nums[i] === 0 ? sum++ : sum--;
        if (map.has(sum)) {
            ans = Math.max(ans, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }

    return ans;
}
