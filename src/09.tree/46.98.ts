import { TreeNode } from "./01.100";

export function isValidBST(root: TreeNode | null): boolean {
    let pre = Infinity;
    let ans = true;
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return;
        }
        dfs(node.left);
        if (pre !== Infinity && pre >= node.val) {
            ans = false;
            return;
        }
        pre = node.val;
        dfs(node.right);
    };

    dfs(root);

    return ans;
}
