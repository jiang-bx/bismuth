export function subsetsWithDup1(nums: number[]): number[][] {
    const ans: number[][] = [];
    const onPath: number[] = [];
    const n = nums.length;

    nums.sort((a, b) => a - b);

    const backtrack = (r: number) => {
        ans.push([...onPath]);

        // 记录本层选中情况
        const used = new Map<number, boolean>();

        for (let i = r; i < n; i++) {
            if (used.has(nums[i])) {
                continue;
            }
            used.set(nums[i], true);
            onPath.push(nums[i]);
            backtrack(i + 1);
            onPath.pop();
        }
    };

    backtrack(0);

    return ans;
}

/**
 * 剪枝优化
 * @param nums
 * @returns
 */
export function subsetsWithDup2(nums: number[]): number[][] {
    const ans: number[][] = [];
    const onPath: number[] = [];
    const n = nums.length;
    const used = new Array(n).fill(false);

    /**
     *  ---- 横向遍历 ----->
     *                1, 2, 2
     *         取 1,      取 2,      取 2(本层不能继续取 2 了)
     *    取 2,  取 2(不能)
     * 取 2,
     *
     *
     */

    const backtrack = (r: number) => {
        ans.push([...onPath]);

        for (let i = r; i < n; i++) {
            if (i >= 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue;
            }
            used[i] = true;
            onPath.push(nums[i]);
            backtrack(i + 1);
            onPath.pop();
            used[i] = false;
        }
    };

    nums.sort((a, b) => a - b);

    backtrack(0);

    return ans;
}

/**
 * 剪枝优化
 * @param nums
 * @returns
 */
export function subsetsWithDup(nums: number[]): number[][] {
    const ans: number[][] = [];
    const onPath: number[] = [];
    const n = nums.length;

    /**
     *  ---- 横向遍历 ----->
     *                1, 2, 2
     *         取 1,      取 2,      取 2(本层不能继续取 2 了)
     *    取 2,  取 2(不能)
     * 取 2,
     *
     *
     */

    const backtrack = (r: number) => {
        ans.push([...onPath]);

        for (let i = r; i < n; i++) {
            if (i > r && nums[i] === nums[i - 1]) {
                continue;
            }

            onPath.push(nums[i]);
            backtrack(i + 1);
            onPath.pop();
        }
    };

    nums.sort((a, b) => a - b);

    backtrack(0);

    return ans;
}
