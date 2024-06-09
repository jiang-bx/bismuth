import { TreeNode } from "./01.100";

export function generateTrees(n: number): Array<TreeNode | null> {
    const helper = (start: number, end: number): Array<TreeNode | null> => {
        if (start > end) {
            return [null];
        }

        const allTrees: Array<TreeNode | null> = [];
        for (let i = start; i <= end; i++) {
            const leftTrees = helper(start, i - 1);
            const rightTrees = helper(i + 1, end);

            leftTrees.forEach((left) => {
                rightTrees.forEach((right) => {
                    allTrees.push(new TreeNode(i, left, right));
                });
            });
        }

        return allTrees;
    };
    return helper(1, n);
}
