import { TreeNode } from "./01.100";

export function kthSmallest(root: TreeNode | null, k: number): number {
    let ans = 0;
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return;
        }

        dfs(node.left);
        if (k === 1) {
            ans = node.val;
            k--;
            return;
        }
        k--;
        dfs(node.right);
    };

    dfs(root);
    return ans;
}
