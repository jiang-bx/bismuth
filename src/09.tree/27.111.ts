import { TreeNode } from "./01.100";

export function minDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    // const lMax = minDepth(root.left);
    // const rMax = minDepth(root.right);
    // return Math.max(lMax, rMax) + 1;

    return 1;
}
