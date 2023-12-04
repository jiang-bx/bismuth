export function productExceptSelf(nums: number[]): number[] {
    /** 方法 1
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        let total = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                total *= nums[j];
            }
        }
        res[i] = total === -0 ? 0 : total;
    }

    return res;
     */

    // 方法二
    const res = [];
    const n = nums.length;
    let k = 1;
    for (let i = 0; i < n; i++) {
        // 存储 除去当前元素左边的乘积
        res[i] = k;
        k *= nums[i];
    }

    k = 1;
    for (let i = n - 1; i >= 0; i--) {
        // 左边 和 右边的乘积
        res[i] *= k;
        if (res[i] === -0) {
            res[i] = 0;
        }
        k *= nums[i]; // k 为该数右边的乘积
    }

    return res;
}
