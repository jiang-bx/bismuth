import { TreeNode } from "./01.100";

// root 是 包含重复值的二叉树搜索树
export function findMode1(root: TreeNode | null): number[] {
    const m = new Map<number, number>();
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return;
        }
        m.set(node.val, !m.has(node.val) ? 1 : m.get(node.val) + 1);
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);

    let ans: number[] = [];
    let max = 0;
    m.forEach((v, k) => {
        if (v > max) {
            max = v;
            ans = [];
        }

        if (max === v) {
            ans.push(k);
        }
    });

    return ans;
}

// root 是 包含重复值的二叉树搜索树
export function findMode(root: TreeNode | null): number[] {
    let ans: number[] = [];
    let maxCount = 0;
    let curCount = 0;
    let preNode: TreeNode | null = null;
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return;
        }
        dfs(node.left);

        if (!preNode) {
            // 第一个节点
            curCount = 1;
        } else if (preNode.val === node.val) {
            // 相同节点
            curCount++;
        } else {
            // 不相同节点
            curCount = 1;
        }

        preNode = node;

        if (curCount > maxCount) {
            maxCount = curCount;
            ans = [];
        }

        if (curCount === maxCount) {
            ans.push(node.val);
        }

        dfs(node.right);
    };

    dfs(root);

    return ans;
}
