export function nextGreaterElements(nums: number[]): number[] {
    const n = nums.length;
    const ans = new Array(n).fill(-1);
    const stack = [];

    for (let i = 0; i < n * 2; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
            ans[stack.pop()] = nums[i % n];
        }
        stack.push(i % n);
    }

    return ans;
}
