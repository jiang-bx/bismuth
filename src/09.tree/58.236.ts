import { TreeNode } from "./01.100";

// root 是 二叉树
export function lowestCommonAncestor1(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    // 终止条件, 只返回 p 或者 q 中的任意一个即可
    if (!root || root.val === p.val || root.val === q.val) {
        return root;
    }

    const left = lowestCommonAncestor1(root.left, p, q);
    const right = lowestCommonAncestor1(root.right, p, q);

    // 都不存在, 返回 null
    if (!left && !right) {
        return null;
    }

    // 有一个不存在, 返回存在的
    if (!left || !right) {
        return left || right;
    }

    // 两个都存在, 公共节点就是 root
    return root;
}
