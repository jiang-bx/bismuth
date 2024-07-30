export function subsets(nums: number[]): number[][] {
    const ans: number[][] = [];
    const onPath: number[] = [];
    const n = nums.length;
    const backtrack = (r: number) => {
        ans.push([...onPath]);

        for (let i = r; i < n; i++) {
            onPath.push(nums[i]);
            backtrack(i + 1);
            onPath.pop();
        }
    };

    backtrack(0);

    return ans;
}
