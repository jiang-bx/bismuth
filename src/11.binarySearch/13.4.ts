// 暴力解法
export function findMedianSortedArrays1(
    nums1: number[],
    nums2: number[]
): number {
    const arr = [...nums1, ...nums2];
    arr.sort((a, b) => a - b);
    const n = arr.length;
    if (n % 2 === 0) {
        const mid = n / 2;
        return (arr[mid] + arr[mid - 1]) / 2;
    }
    return arr[Math.floor(n / 2)];
}

// log(n+m) 解法
export function findMedianSortedArrays(
    nums1: number[],
    nums2: number[]
): number {
    const m = nums1.length;
    const n = nums2.length;

    if (m > n) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let iMax = m;
    let iMin = 0;

    while (iMin <= iMax) {
        let i = Math.floor((iMax + iMin) / 2);
        let j = Math.floor((m + n + 1) / 2) - i;

        if (j != 0 && i != m && nums2[j - 1] > nums1[i]) {
            iMin = i + 1;
        } else if (i != 0 && j != n && nums1[i - 1] > nums2[j]) {
            iMax = i - 1;
        } else {
            let maxLeft = 0;
            if (i == 0) {
                maxLeft = nums2[j - 1];
            } else if (j == 0) {
                maxLeft = nums1[i - 1];
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }

            if ((m + n) % 2 === 1) {
                return maxLeft;
            }

            let minRight = 0;
            if (i == m) {
                minRight = nums2[j];
            } else if (j == n) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums2[j], nums1[i]);
            }

            return (maxLeft + minRight) / 2;
        }
    }

    return 0.0;
}
