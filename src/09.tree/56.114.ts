import { TreeNode } from "./01.100";

export function flatten(root: TreeNode | null): void {
    /**
     *   1
     * 2   5
     * --------
     * 1
     *   2
     *     5
     */

    if (!root) {
        return;
    }

    flatten(root.left)
    flatten(root.right)

    const right = root.right
    const left = root.left
    root.left = null
    root.right = left

    while (root.right) {
        root = root.right
    }

    root.right = right
}
