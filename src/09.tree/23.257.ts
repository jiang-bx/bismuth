import { TreeNode } from "./01.100";

export function binaryTreePaths(root: TreeNode | null): string[] {
    // BFS
    const ans: string[] = [];
    const dfs = (node: TreeNode | null, cur: string) => {
        if (!node) {
            return;
        }

        if (!cur) {
            cur += node.val + "";
        } else {
            cur += "->" + node.val;
        }

        if (!node.left && !node.right) {
            ans.push(cur);
            return;
        }

        dfs(node.left, cur);
        dfs(node.right, cur);
    };

    dfs(root, "");

    return ans;
}
