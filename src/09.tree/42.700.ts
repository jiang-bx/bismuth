import { TreeNode } from "./01.100";

export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) {
        return null;
    }

    if (val > root.val) {
        return searchBST(root.right, val);
    } else if (val < root.val) {
        return searchBST(root.left, val);
    }

    return root;
}
