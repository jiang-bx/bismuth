export function summaryRanges(nums: number[]): string[] {
    /** 解法一:
     const n = nums.length;
    const res: string[] = [];
    let i = 1;

    while (i < n + 1) {
        let start = nums[i - 1] + "";
        let end = "";
        while (i < n && nums[i - 1] + 1 === nums[i]) {
            end = nums[i] + "";
            i++;
        }

        res.push(`${start}${end ? "->" + end : ""}`);

        i++;
    }

    return res;
    */

    const res: string[] = [];
    const n = nums.length;
    let i = 0;

    while (i < n) {
        const low = i;
        i++;
        while (i < n && nums[i] === nums[i - 1] + 1) {
            i++;
        }
        const high = i - 1;
        if (low < high) {
            res.push(`${nums[low]}->${nums[high]}`);
        } else {
            res.push(`${nums[low]}`);
        }
    }

    return res;
}
