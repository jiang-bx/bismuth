export function intersect(nums1: number[], nums2: number[]): number[] {
    // 正常解法
    // const map = new Map<number, number>();
    // const res: number[] = [];
    // for (let i = 0; i < nums1.length; i++) {
    //     map[nums1[i]] = (map[nums1[i]] || 0) + 1;
    // }
    // for (let i = 0; i < nums2.length; i++) {
    //     if (map[nums2[i]]) {
    //         res.push(nums2[i]);
    //         map[nums2[i]] = map[nums2[i]] - 1;
    //     }
    // }
    // return res;

    // 如果给定的数组已经排好序呢？你将如何优化你的算法？
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    // 双指针
    let l = 0,
        r = 0;
    const ans: number[] = [];
    while (l < nums1.length && r < nums2.length) {
        if (nums1[l] < nums2[r]) {
            l++;
        } else if (nums1[l] === nums2[r]) {
            ans.push(nums1[l]);
            l++;
            r++;
        } else {
            r++;
        }
    }

    return ans;
}
