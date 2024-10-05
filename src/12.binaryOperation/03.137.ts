export function singleNumber137(nums: number[]): number {
    let x = 0;
    nums.forEach((item) => {
        x ^= item;
    });
    return x;
}
