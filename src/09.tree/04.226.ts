import { TreeNode } from "./01.100";

export function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return root;
    }

    const temp = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = temp;

    return root;
}
