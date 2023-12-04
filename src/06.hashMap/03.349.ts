export function intersection(nums1: number[], nums2: number[]): number[] {
    // const res: number[] = [];
    // const hashMap: number[] = new Array(1001);

    // for (let i = 0; i < nums1.length; i++) {
    //     hashMap[nums1[i]] = 1;
    // }

    // for (let i = 0; i < nums2.length; i++) {
    //     hashMap[nums2[i]] =
    //         hashMap[nums2[i]] === 1 || hashMap[nums2[i]] === 2 ? 2 : 3;
    // }

    // for (let i = 0; i < hashMap.length; i++) {
    //     if (hashMap[i] === 2) {
    //         res.push(i);
    //     }
    // }

    // return res;

    const hashTable = new Set<number>(nums1);
    const res = new Set<number>();

    for (const num of nums2) {
        if (hashTable.has(num)) {
            res.add(num);
        }
    }

    return [...res];
}
