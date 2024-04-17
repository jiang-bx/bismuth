import { TreeNode } from "./01.100";

// BFS
export function averageOfLevels(root: TreeNode | null): number[] {
    const ans: number[] = [];
    if (!root) {
        return ans;
    }

    const queue: TreeNode[] = [root];

    while (queue.length) {
        let total = 0;
        let k = queue.length;
        for (let i = queue.length; i > 0; i--) {
            const node = queue.shift();
            total += node.val;

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        ans.push(total / k);
    }

    return ans;
}
