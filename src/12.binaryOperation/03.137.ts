// 暴力解法 - 统计每位 1 的个数, 与 3 取模
export function singleNumber137_1(nums: number[]): number {
    let ans = 0;

    for (let i = 0; i < 32; i++) {
        let cnt1 = 0;
        for (const x of nums) {
            cnt1 += (x >> i) & 1;
        }
        ans |= cnt1 % 3 << i;
    }

    return ans;
}

export function singleNumber137(nums: number[]): number {
    let a = 0;
    let b = 0;
    for (const x of nums) {
        b = (b ^ x) & ~a;
        a = (a ^ x) & ~b;
    }
    return b;
}
