export function find132pattern(nums: number[]): boolean {
    const stack = [];
    let k = -Infinity;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (k > nums[i]) {
            return true;
        }

        // stack 维护最大值, 表示 j, 从 stack 出去的为 k, 因为是从后往前遍历, 满足 j < k
        while (stack.length && stack[stack.length - 1] < nums[i]) {
            k = stack.pop();
        }
        stack.push(nums[i]);
    }
    return false;
}
