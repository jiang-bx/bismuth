import { TreeNode } from "./01.100";

export function trimBST(
    root: TreeNode | null,
    low: number,
    high: number
): TreeNode | null {
    if (!root) {
        return null;
    }

    // 不符合时, 总会返回正确的 root
    if (root.val < low) {
        return trimBST(root.right, low, high);
    } else if (root.val > high) {
        return trimBST(root.left, low, high);
    }

    // 符合时, 递归处理子树
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);

    return root;
}
