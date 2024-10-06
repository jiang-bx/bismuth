export function singleNumber260(nums: number[]): number {
    let a = 0;
    let b = 0;
    for (const x of nums) {
        b = (b ^ x) & ~a;
        a = (a ^ x) & ~b;
    }
    return b;
}
