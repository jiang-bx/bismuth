export function combinationSum21(
    candidates: number[],
    target: number
): number[][] {
    const ans: number[][] = [];
    const onPath: number[] = [];
    let total = 0;

    // 排序
    candidates.sort((a, b) => a - b);

    const backtrack = (r: number) => {
        if (total === target) {
            ans.push([...onPath]);
            return;
        }

        for (let i = r; i < candidates.length; i++) {
            if (total + candidates[i] > target) {
                break;
            }

            // 相同数值的结点，从第 2 个开始，候选数更少，结果一定发生重复 跳过
            if (i > r && candidates[i] === candidates[i - 1]) {
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
