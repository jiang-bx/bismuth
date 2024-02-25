export function findLengthOfLCIS(nums: number[]): number {
    // 9, 1, 2, 3, 5, 4, 7
    // 0  1  2  3  4  5  6

    /** 暴力解法
     let l = 0,
        r = 1,
        res = 1;

    while (r < nums.length) {
        if (nums[r - 1] >= nums[r]) {
            res = Math.max(res, r - l);
            l = r;
        }
        r++;
    }

    res = Math.max(res, r - l);

    return res;
     */

    // 贪心
    let res = 1,
        max = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            res++;
        } else {
            res = 1;
        }
        max = Math.max(res, max);
    }

    return max;
}
