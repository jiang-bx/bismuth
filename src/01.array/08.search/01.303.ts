export class NumArray {
    sums: number[];
    constructor(nums: number[]) {
        this.sums = [0];
        // 提前计算 nums 的前缀和
        nums.forEach((item, index) => {
            this.sums[index + 1] = this.sums[index] + item;
        });
    }

    sumRange(left: number, right: number): number {
        return this.sums[right + 1] - this.sums[left];
    }
}
