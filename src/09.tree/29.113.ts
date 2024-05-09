import { TreeNode } from "./01.100";

export function pathSum1(root: TreeNode | null, targetSum: number): number[][] {
    const res: number[][] = [];
    const path: number[] = [];
    const dfs = (node: TreeNode | null, tar: number) => {
        if (!node) {
            return;
        }

        path.push(node.val);
        tar -= node.val;

        if (tar === 0 && !node.left && !node.right) {
            res.push([...path]);
        }

        dfs(node.left, tar);
        dfs(node.right, tar);

        path.pop();
    };

    dfs(root, targetSum);

    return res;
}
