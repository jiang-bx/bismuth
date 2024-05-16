import { TreeNode } from "./01.100";

export function preorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = [];
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return;
        }

        // 前序遍历
        ans.push(node.val);
        dfs(node.left);
        dfs(node.right);

        // 中序遍历
        // dfs(node.left);
        // ans.push(node.val);
        // dfs(node.right);

        // 后序遍历
        // dfs(node.left);
        // dfs(node.right);
        // ans.push(node.val);
    };

    dfs(root);
    return ans;
}
