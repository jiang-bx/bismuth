export function singleNumber(nums: number[]): number {
    let x = 0;
    nums.forEach((item) => {
        x ^= item;
    });
    return x;
}
