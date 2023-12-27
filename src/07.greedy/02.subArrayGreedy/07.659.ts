export function isPossible(nums: number[]): boolean {
    const n = nums.length;

    let dp1 = 0,
        dp2 = 0,
        dp3 = 0,
        i = 0;

    while (i < n) {
        const x = nums[i];
        const start = i;

        while (i < n && nums[i] === x) {
            i++;
        }

        const cnt = i - start;

        if (start > 0 && x !== nums[start - 1] + 1) {
            if (dp1 + dp2 > 0) {
                return false;
            } else {
                dp1 = cnt;
                dp2 = dp3 = 0;
            }
        } else {
            if (dp1 + dp2 > cnt) {
                return false;
            }

            let left = cnt - dp1 - dp2;
            let keep = Math.min(dp3, left);
            dp3 = keep + dp2;
            dp2 = dp1;
            dp1 = left - keep;
        }
    }

    return dp1 === 0 && dp2 === 0;
}
