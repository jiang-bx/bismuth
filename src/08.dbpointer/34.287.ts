export function findDuplicate(nums: number[]): number {
    let slow = 0;
    let fast = 0;

    slow = nums[slow];
    fast = nums[nums[fast]];

    while (fast != slow) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }

    // 寻找环的入口
    let pre1 = 0;
    let pre2 = slow;
    while (pre1 != pre2) {
        pre1 = nums[pre1];
        pre2 = nums[pre2];
    }

    return pre1;
}
