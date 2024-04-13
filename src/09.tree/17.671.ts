import { TreeNode } from "./01.100";

export function findSecondMinimumValue(root: TreeNode | null): number {
    let ans = -1;

    const dfs = (node: TreeNode | null, cur: number) => {
        if (!node) {
            return;
        }

        if (node.val !== cur) {
            if (ans === -1) {
                ans = node.val;
            } else {
                ans = Math.min(ans, node.val);
            }
            return;
        }

        dfs(node.left, cur);
        dfs(node.right, cur);
    };

    dfs(root, root.val);

    return ans;
}
