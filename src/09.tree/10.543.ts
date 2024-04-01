import { TreeNode } from "./01.100";

export function diameterOfBinaryTree(root: TreeNode | null): number {
    let ans = 0;

    const dfs = (t: TreeNode | null): number => {
        if (!t) {
            return 0;
        }
        const l = dfs(t.left);
        const r = dfs(t.right);
        ans = Math.max(ans, l + r);
        return Math.max(l, r) + 1;
    };

    dfs(root);

    return ans;
}
