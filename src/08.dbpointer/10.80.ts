export function removeDuplicates1(nums: number[]): number {
    // 双指针解法
    // let i = 0;
    // let j = 1;
    // while (j < nums.length) {
    //     if (nums[i] != nums[j]) {

    //         // 当两个指针相差为 2 时, 才需要复制
    //         /**
    //          * 这种情况不需要复制, 仅指针移动即可
    //          * i j
    //          * 0 1 1 2 2
    //          * 
    //          * 以下这种情况需要复制
    //          *   i   j
    //          * 0 1 1 2 2
    //          */
    //         if (j - i >= 2) {
    //             nums[i + 1] = nums[j];
    //         }
    //         i++;
    //     }
    //     j++;
    // }
    // return i + 1;


    // 通用解法
    let idx = 0;
    for (let num of nums) {
        if (idx < 1 || nums[idx - 1] !== num) {
            nums[idx++] = num
        }
    }
    return idx
}
