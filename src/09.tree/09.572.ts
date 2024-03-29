import { IsSameTree, TreeNode } from "./01.100";

export function isSubtree(
    root: TreeNode | null,
    subRoot: TreeNode | null
): boolean {
    // subRoot 基本上不会为空
    if (!subRoot) {
        return true;
    }

    // 只要 root 为空了, 肯定就不相同, 结束
    if (!root) {
        return false;
    }

    return (
        isSubtree(root.left, subRoot) ||
        isSubtree(root.right, subRoot) ||
        isSame(root, subRoot)
    );
}

function isSame(root1: TreeNode | null, root2: TreeNode | null): boolean {
    if (!root1 && !root2) {
        return true;
    }
    if (!root1 || !root2) {
        return false;
    }
    if (root1.val != root2.val) {
        return false;
    }

    return isSame(root1.left, root2.left) && isSame(root1.right, root2.right);
}
