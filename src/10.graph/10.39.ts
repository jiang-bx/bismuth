/**
 * 不进行剪枝
 * @param candidates
 * @param target
 * @returns
 */
export function combinationSum1(
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
            const val = candidates[i];

            // 如果当前和大于了, 就跳过这个选择
            if (total + val > target) {
                continue;
            }

            total += val;
            onPath.push(val);

            // 可以进行重复选择, 所以不用 + 1
            backtrack(i);

            total -= val;
            onPath.pop();
        }
    };

    backtrack(0);

    return ans;
}

/**
 *
 * @param candidates
 * @param target
 * @returns
 */
export function combinationSum(
    candidates: number[],
    target: number
): number[][] {
    const ans: number[][] = [];
    const onPath: number[] = [];
    let total = 0;

    // 先排序, 大于了之后, 直接跳出循环
    candidates.sort((a, b) => a - b);

    const backtrack = (r: number) => {
        if (total === target) {
            ans.push([...onPath]);
            return;
        }

        for (let i = r; i < candidates.length; i++) {
            const val = candidates[i];

            // 如果当前和大于了, 因为排序过, 就跳过整个循环
            if (total + val > target) {
                break;
            }

            total += val;
            onPath.push(val);

            // 可以进行重复选择, 所以不用 + 1
            backtrack(i);

            total -= val;
            onPath.pop();
        }
    };

    backtrack(0);

    return ans;
}
