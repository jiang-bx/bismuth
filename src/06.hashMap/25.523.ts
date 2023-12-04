export function checkSubarraySum(nums: number[], k: number): boolean {
    // 超时算法
    // const n = nums.length;
    // if (n <= 1) {
    //     return false;
    // }

    // for (let i = 0; i < n - 1; i++) {
    //     let sum = nums[i];
    //     for (let j = i + 1; j < n; j++) {
    //         sum += nums[j];
    //         if (sum % k === 0) {
    //             return true;
    //         }
    //     }
    // }

    // return false;

    // 利用前缀和, 与 哈希表

    /**
     * 同余定理: (a % m) = (b % m), a 和 b 对于模同余
     * 模运算:
     * 1. (a + b) % m = ((a % m) + (b % m)) % m
     * 2. (a - b) % m = ((a % m) - (b % m) + m) % m  ==> +m 是为了得到非负数
     *
     * 连续的子数组的元素之和: sum[i:j] = sum[j] - sum[i-1]
     * 为了能被 k 整除: sum[i:j] % k = 0
     * 得到: (sum[j] - sum[i-1]) % k = 0
     * 得到: sum[j] % k - sum[i-1] % k = 0
     * 得到: sum[j] % k = sum[i-1] % k
     * 得到: sumJ 余数 = sumI 余数
     * 得到: 只要存在相同的余数, 就能满足被 k 整除
     *
     * 举例:   nums = [   23, 2,  4,  6,  7]
     * 前缀和: sums = [0, 23, 25, 29, 35, 42]; 比 nums 多一个
     * sums[0]: 0
     * sums[1]: 23 % 6 = 5
     * sums[2]: 23+2 % 6 = 1
     * sums[3]: 23+2+4 % 6 = 5
     *
     * => 5 - 5 = 0
     * => sum[3] - sum[1] = 0
     * => j = 3, i = 2
     * => 连续子数组存在: [2, 4]
     */

    const n = nums.length;
    if (n <= 1) return false;

    // key: sums % k,  value: index
    const map = new Map<number, number>();
    map.set(0, -1);

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];

        if (k !== 0) sum %= k;

        if (map.has(sum)) {
            if (i - map.get(sum) >= 2) {
                return true;
            }
        } else {
            map.set(sum, i);
        }
    }

    return false;
}
