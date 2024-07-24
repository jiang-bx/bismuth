export function permute(nums: number[]): number[][] {
    const n = nums.length;
    const ans: number[][] = [];
    const onPath: number[] = [];
    const selected = new Array(n).fill(false);
    const backtrack = () => {
        if (onPath.length === n) {
            ans.push([...onPath]);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (!selected[i]) {
                selected[i] = true;
                onPath.push(nums[i]);

                backtrack();

                selected[i] = false;
                onPath.pop();
            }
        }
    };

    backtrack();

    return ans;
}
