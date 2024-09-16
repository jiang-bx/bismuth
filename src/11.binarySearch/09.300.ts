export function lengthOfLIS1(nums: number[]): number {
    const n = nums.length;
    const dp = new Array(n).fill(1);
    let ans = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        ans = Math.max(dp[i], ans);
    }

    return ans;
}

// 贪心算法
export function lengthOfLIS(nums: number[]): number {
    const n = nums.length;
    const tails = new Array(n).fill(0);
    let ans = 0;

    for (let k = 0; k < n; k++) {
        const num = nums[k];
        let i = 0;
        let j = ans;

        while (i < j) {
            const mid = i + Math.floor((j - i) / 2);
            if (tails[mid] < num) {
                i = mid + 1;
            } else {
                j = mid;
            }
        }

        tails[i] = num;

        if (j == ans) {
            ans++;
        }
    }

    return ans;
}
