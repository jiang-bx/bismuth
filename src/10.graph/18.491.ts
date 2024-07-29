export function findSubsequences(nums: number[]): number[][] {
    const ans: number[][] = [];
    const onPath: number[] = [];
    const n = nums.length;
    const backtrack = (r: number) => {
        if (onPath.length >= 2) {
            ans.push([...onPath]);
        }

        const used = new Map<number, boolean>();

        for (let i = r; i < n; i++) {
            if (used.has(nums[i])) {
                continue;
            }

            if (onPath.length === 0 || nums[i] >= onPath[onPath.length - 1]) {
                used.set(nums[i], true);
                onPath.push(nums[i]);
                backtrack(i + 1);
                onPath.pop();
            }
        }
    };

    backtrack(0)

    return ans;
}
