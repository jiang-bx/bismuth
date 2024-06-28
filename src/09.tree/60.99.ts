import { TreeNode } from "./01.100";

// root 是错误的二叉树搜索树
// 该树中的 **恰好** 两个节点的值被错误地交换
export function recoverTree1(root: TreeNode | null): void {
    const list: TreeNode[] = [];
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return;
        }
        dfs(node.left);
        list.push(node);
        dfs(node.right);
    };
    dfs(root);

    // 1, 2, 3, 7, 5, 6, 4

    // x 是大值
    let x: TreeNode | null = null;

    // y 是小值
    let y: TreeNode | null = null;

    for (let i = 0; i < list.length - 1; i++) {
        if (list[i].val > list[i + 1].val) {
            y = list[i + 1];
            if (!x) {
                x = list[i];
            }
        }
    }

    if (!x || !y) {
        return;
    }

    const temp = x.val;
    x.val = y.val;
    y.val = temp;
}

// root 是错误的二叉树搜索树
// 该树中的 **恰好** 两个节点的值被错误地交换
export function recoverTree(root: TreeNode | null): void {
    // x 是大值
    let x: TreeNode | null = null;
    // y 是小值
    let y: TreeNode | null = null;

    let pre: TreeNode | null = null;
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return;
        }
        dfs(node.left);
        if (pre) {
            if (pre.val > node.val) {
                y = node
                if (!x) {
                    x = pre
                }
            }
        }
        pre = node
        dfs(node.right);
    };
    dfs(root);

    if (!x || !y) {
        return;
    }

    const temp = x.val;
    x.val = y.val;
    y.val = temp;
}
