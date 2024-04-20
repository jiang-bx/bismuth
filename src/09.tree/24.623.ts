import { TreeNode } from "./01.100";

export function addOneRow1(
    root: TreeNode | null,
    val: number,
    depth: number
): TreeNode | null {
    // 特殊处理
    if (depth == 1) {
        return new TreeNode(val, root);
    }

    // depth >= 2 时
    const dfs = (node: TreeNode | null, cur: number) => {
        if (cur + 1 === depth) {
            node.left = new TreeNode(val, node.left, null);
            node.right = new TreeNode(val, null, node.right);
            return;
        }

        node.left && dfs(node.left, cur + 1);
        node.right && dfs(node.right, cur + 1);
    };

    dfs(root, 1);

    return root;
}

export function addOneRow(
    root: TreeNode | null,
    val: number,
    depth: number
): TreeNode | null {
    // 特殊处理
    if (depth == 1) {
        return new TreeNode(val, root);
    }

    // BSF
    const queue: TreeNode[] = [root];
    let cur = 1;

    while (queue.length) {
        const size = queue.length;
        for (let i = size; i > 0; i--) {
            const node = queue.shift();

            if (cur + 1 === depth) {
                node.left = new TreeNode(val, node.left, null);
                node.right = new TreeNode(val, null, node.right);
            }

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        cur++;
        if (cur === depth) {
            return root;
        }
    }

    return root;
}
