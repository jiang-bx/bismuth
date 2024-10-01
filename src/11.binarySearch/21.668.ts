export function findKthNumber(m: number, n: number, k: number): number {
    let l = 1 * 1;
    let r = m * n;

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);

        let count = 0;
        let i = m - 1;
        let j = 0;

        // 找到 k 的范围
        while (i >= 0 && j < n) {
            if ((i + 1) * (j + 1) <= mid) {
                count += i + 1;
                j++;
            } else {
                i--;
            }
        }

        if (count < k) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return r;
}
