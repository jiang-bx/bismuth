import { TreeNode } from "./01.100";

export function findDuplicateSubtrees(
    root: TreeNode | null
): Array<TreeNode | null> {
    const map = new Map<string, number>();
    const ans: Array<TreeNode | null> = [];
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return " ";
        }

        const val = node.val + "_" + dfs(node.left) + dfs(node.right);

        map.set(val, map.has(val) ? map.get(val) + 1 : 1);

        if (map.get(val) == 2) {
            ans.push(node);
        }

        return val;
    };

    dfs(root);

    return ans;
}
