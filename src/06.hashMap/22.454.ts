export function fourSumCount(
    nums1: number[],
    nums2: number[],
    nums3: number[],
    nums4: number[]
): number {
    // 超时算法
    // let count = 0;
    // for (let i = 0; i < nums1.length; i++) {
    //     for (let j = 0; j < nums2.length; j++) {
    //         for (let k = 0; k < nums3.length; k++) {
    //             for (let l = 0; l < nums4.length; l++) {
    //                 if (nums1[i] + nums2[j] + nums3[k] + nums4[l] === 0) {
    //                     count++;
    //                 }
    //             }
    //         }
    //     }
    // }
    // return count;

    // 分组算法
    const map = new Map<number, number>();
    let count = 0;

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            const sum = nums1[i] + nums2[j];
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }

    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            // 这里和需要取相反数
            const sum = -(nums3[i] + nums4[j]);
            if (map.has(sum)) {
                count += map.get(sum);
            }
        }
    }

    return count;
}
