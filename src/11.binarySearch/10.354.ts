export function maxEnvelopes(envelopes: number[][]): number {
    envelopes.sort((a, b) => {
        return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0];
    });

    const nums = envelopes.map((item) => item[1]);
    const n = envelopes.length;
    const top = new Array(n).fill(0);
    let ans = 0;

    for (let i = 0; i < n; i++) {
        const num = nums[i];

        let l = 0;
        let r = ans;

        while (l < r) {
            const mid = l + Math.floor((r - l) / 2);
            if (top[mid] >= num) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }

        if (l == ans) {
            ans++;
        }

        top[l] = num;
    }

    return ans;
}
