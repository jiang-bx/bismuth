import { TreeNode } from "./01.100";

export function levelOrder(root: TreeNode | null): number[][] {
    const ans = [];

    if (!root) {
        return ans;
    }

    // BFS
    const queue: TreeNode[] = [root];

    while (queue.length) {
        const temp = [];
        const qq: TreeNode[] = [];
        for (let i = queue.length; i > 0; i--) {
            const node = queue.shift();
            temp.push(node.val);

            if (node.left) {
                qq.push(node.left);
            }
            if (node.right) {
                qq.push(node.right);
            }
        }
        ans.push(temp);
        queue.push(...qq);
    }

    return ans;
}
