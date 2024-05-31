import { TreeNode } from "./01.100";

export function deleteNode(
    root: TreeNode | null,
    key: number
): TreeNode | null {
    if (!root) {
        return null;
    }

    if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else {
        // 找到需要删除的节点

        // 左子树为空
        if (!root.left) {
            return root.right;
        }

        // 右子树为空
        if (!root.right) {
            return root.left;
        }

        // 左右子树都存在时, root.right 替换 root
        let node = root.right;

        // 找到右子树的最左节点,
        while (node.left) {
            node = node.left;
        }

        // ! 将 root.left 拼接到 root.right 最左节点下
        node.left = root.left;

        // root.right 替换删除的节点
        root = root.right;
    }

    return root;
}
