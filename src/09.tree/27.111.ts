import { TreeNode } from "./01.100";

export function minDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    const lMin = minDepth(root.left);
    const rMin = minDepth(root.right);

    // 左右子节点只要有一个为空, 其中必有一个为 0
    if (!root.left || !root.right) {
        return lMin + rMin + 1;
    }

    return Math.min(lMin, rMin) + 1;
}
