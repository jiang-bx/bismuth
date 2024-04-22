import { TreeNode } from "./01.100";

export function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    const lMax = maxDepth(root.left);
    const rMax = maxDepth(root.right);
    return Math.max(lMax, rMax) + 1;
}
