/**
 * 
 * @param nums 包含 0 到N - 1的所有整数
 * @returns 
 */
export function arrayNesting(nums: number[]): number {
    let ans = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === -1) {
            continue
        }

        let next = nums[i]
        let size = 1

        while (next != i) {
            const temp = nums[next]
            nums[next] = -1
            size++
            next = temp
        }

        ans = Math.max(ans, size)
    }

    return ans;
}
