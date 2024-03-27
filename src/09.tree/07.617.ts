import { TreeNode } from "./01.100";

export function mergeTrees(
    root1: TreeNode | null,
    root2: TreeNode | null
): TreeNode | null {
    // if (!root1 && !root2) {
    //     return null;
    // }
    // const node = new TreeNode(-1);
    // if (root1 && root2) {
    //     node.val = root1.val + root2.val;
    //     node.left = mergeTrees(root1.left, root2.left);
    //     node.right = mergeTrees(root1.right, root2.right);
    //     return node;
    // }
    // if (root1 && !root2) {
    //     node.val = root1.val;
    //     node.left = root1.left;
    //     node.right = root1.right;
    //     return node;
    // }
    // node.val = root2.val;
    // node.left = root2.left;
    // node.right = root2.right;
    // return node;

    // 改造上面的代码
    if (!root1) {
        return root2;
    }
    if (!root2) {
        return root1;
    }

    return new TreeNode(
        root1.val + root2.val,
        mergeTrees(root1.left, root2.left),
        mergeTrees(root1.right, root2.right)
    );
}
