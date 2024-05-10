import { TreeNode } from "./01.100";

export function sumOfLeftLeaves(root: TreeNode | null): number {
    let ans = 0;
    const dfs = (node: TreeNode | null, isLeft: boolean) => {
        if (!node) {
            return;
        }

        if (isLeft && !node.left && !node.right) {
            ans += node.val;
        }

        dfs(node.left, true);
        dfs(node.right, false);
    };
    dfs(root, false);
    return ans;
}
