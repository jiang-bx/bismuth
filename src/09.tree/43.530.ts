import { TreeNode } from "./01.100";

export function getMinimumDifference(root: TreeNode | null): number {
    let ans = Infinity;
    let pre = -1;
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return;
        }

        dfs(node.left);

        if (pre !== -1) {
            ans = Math.min(ans, node.val - pre);
        }
        pre = node.val;

        dfs(node.right);
    };

    dfs(root);

    return ans;
}
