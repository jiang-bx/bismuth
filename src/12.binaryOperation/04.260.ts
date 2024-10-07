export function singleNumber260(nums: number[]): number[] {
    let xor = 0;
    for (const x of nums) {
        xor ^= x;
    }
    const lowBit = xor & -xor;
    const ans = new Array(2).fill(0);
    for (const x of nums) {
        if ((x & lowBit) === 0) {
            ans[0] ^= x;
        } else {
            ans[1] ^= x;
        }
    }

    return ans;
}
