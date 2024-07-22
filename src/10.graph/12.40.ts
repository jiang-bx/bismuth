export function combinationSum21(
    candidates: number[],
    target: number
): number[][] {
    const ans: number[][] = [];
    const onPath: number[] = [];
    let total = 0;

    const backtrack = (r: number) => {
        if (total === target) {
            ans.push([...onPath]);
            return;
        }

        for (let i = r; i < candidates.length; i++) {
            if (total + candidates[i] > target) {
                continue;
            }
            total += candidates[i];
            onPath.push(candidates[i]);
            backtrack(i + 1);
            total -= candidates[i];
            onPath.pop();
        }
    };

    backtrack(0);
    return ans;
}
