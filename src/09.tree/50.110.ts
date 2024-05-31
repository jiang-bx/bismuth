import { TreeNode } from "./01.100";

export function isBalanced(root: TreeNode | null): boolean {
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return 0;
        }

        const l = dfs(node.left);
        if (l === -1) {
            return -1;
        }

        const r = dfs(node.right);
        if (r === -1) {
            return -1;
        }

        return Math.abs(l - r) > 1 ? -1 : Math.max(l, r) + 1;
    };

    return dfs(root) != -1;
}
