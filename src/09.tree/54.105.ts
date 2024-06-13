import { TreeNode } from "./01.100";

export function buildTree(
    preorder: number[],
    inorder: number[]
): TreeNode | null {
    /**
     * 先序遍历, [根节点 | 左子树 | 右子树]
     * 中序遍历, [左子树 | 根节点 | 右子树]
     */

    const m = new Map<number, number>();
    inorder.forEach((item, i) => {
        m.set(item, i);
    });

    const dfs = (cur: number, left: number, right: number): TreeNode | null => {
        if (left > right) {
            return null;
        }

        const node = new TreeNode(preorder[cur]);

        // i 是 中序遍历中的 的父节点 index 值
        const i = m.get(preorder[cur]);

        node.left = dfs(cur + 1, left, i - 1);
        node.right = dfs(cur + (i - left) + 1, i + 1, right);

        return node;
    };

    return dfs(0, 0, inorder.length - 1);
}
