import { TreeNode } from "./01.100";

export function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }
    return dfs(root.left, root.right);
}

function dfs(l: TreeNode | null, r: TreeNode | null): boolean {
    if (!l && !r) {
        return true;
    }
    if (!l || !r) {
        return false;
    }
    if (l.val !== r.val) {
        return false;
    }

    return dfs(l.left, r.right) && dfs(l.right, r.left);
}
