import { TreeNode } from "./01.100";

export function inorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = [];
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return;
        }

        dfs(node.left);
        ans.push(node.val);
        dfs(node.right);
    };

    dfs(root);

    return ans;
}
