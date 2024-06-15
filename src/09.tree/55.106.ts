import { TreeNode } from "./01.100";

export function buildTree1(
    inorder: number[],
    postorder: number[]
): TreeNode | null {
    /**
     * 前序遍历: [根节点 | 左子树 | 右子树]
     * 中序遍历: [左子树 | 根节点 | 右子树]
     * 后序遍历: [左子树 | 右子树 | 根节点]
     */

    const m = new Map<number, number>();
    inorder.forEach((item, i) => {
        m.set(item, i);
    });

    let postIndex = postorder.length - 1;

    const dfs = (left: number, right: number): TreeNode | null => {
        if (left > right) {
            return null;
        }

        const node = new TreeNode(postorder[postIndex]);
        const i = m.get(postorder[postIndex]);
        postIndex--;

        node.right = dfs(i + 1, right);
        node.left = dfs(left, i - 1);
        return node;
    };

    return dfs(0, inorder.length - 1);
}
