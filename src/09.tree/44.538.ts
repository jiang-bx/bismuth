import { TreeNode } from "./01.100";

export function convertBST(root: TreeNode | null): TreeNode | null {
    let start = 0;
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return;
        }

        dfs(node.right);
        node.val += start;
        start = node.val;
        dfs(node.left);
    };
    dfs(root);
    return root;
}
