import { TreeNode } from "./01.100";

export function hasPathSum1(root: TreeNode | null, targetSum: number): boolean {
    let isExist = false;
    const dfs = (node: TreeNode | null, cur: number) => {
        if (!node || isExist) {
            return;
        }

        cur += node.val;

        if (!node.left && !node.right && cur === targetSum) {
            isExist = true;
        }

        dfs(node.left, cur);
        dfs(node.right, cur);
    };

    dfs(root, 0);

    return isExist;
}

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false;
    }

    if (!root.left && !root.right) {
        return targetSum === root.val;
    }

    return (
        hasPathSum(root.left, targetSum - root.val) ||
        hasPathSum(root.right, targetSum - root.val)
    );
}
