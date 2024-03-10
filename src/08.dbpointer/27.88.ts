export function merge(
    nums1: number[],
    m: number,
    nums2: number[],
    n: number
): void {
    // nums1.length === m + n
    // 1 2 9 0 0 0
    // 2 5 6

    let i = nums1.length - 1;
    m--;
    n--;

    while (n >= 0) {
        // 这时, 需要把最大的移动到 i 位置
        while (m >= 0 && nums1[m] > nums2[n]) {
            // 没有必要交换位置, 判断是 m 和 n 的位置大小, 一直在减减
            nums1[i] = nums1[m];
            i--;
            m--;
        }

        // 这时, nums2[n] > nums1[m]
        nums1[i--] = nums2[n--];
    }
}
