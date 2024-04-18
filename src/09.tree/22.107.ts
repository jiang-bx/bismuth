import { TreeNode } from "./01.100";

// BFS
export function levelOrderBottom(root: TreeNode | null): number[][] {
    const ans: number[][] = [];

    if (!root) {
        return ans;
    }

    const queue: TreeNode[] = [root];

    while (queue.length) {
        const size = queue.length;
        const temp: number[] = [];
        for (let i = size; i > 0; i--) {
            const node = queue.shift();
            temp.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        ans.unshift(temp);
    }

    return ans;
}
