export function triangleNumber(nums: number[]): number {
    /**
     * 从小到大排序
     * 固定 i 为最长边, 从后往前找
     * 当两条边和小于等于第三边, 不符合
     * 说明需要增大两边之后, 所以 l++
     * 
     * 反之, 符合, 继续减小两边之和判断, 所以 r--
     * 而且说明, l+r > i, l + 1 + r > i,...r-1+r > i 都满足条件
     * 所以 总和为 r - l
     */
    nums.sort((a, b) => a - b);

    const n = nums.length;
    let res = 0;

    for (let i = n - 1; i >= 2; i--) {
        let l = 0;
        let r = i - 1;

        while (l < r) {
            if (nums[l] + nums[r] > nums[i]) {
                res += r - l;
                r--;
            } else {
                l++;
            }
        }
    }
    return res;
}
