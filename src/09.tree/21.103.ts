import { TreeNode } from "./01.100";

// BFS
export function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const ans: number[][] = [];

    if (!root) {
        return ans;
    }

    const queue: TreeNode[] = [root];
    let k = 0;
    while (queue.length) {
        const size = queue.length;
        const temp: number[] = [];
        for (let i = size; i > 0; i--) {
            const node = queue.shift();
            if (k % 2 === 0) {
                temp.push(node.val);
            } else {
                temp.unshift(node.val);
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        k++;
        ans.push(temp);
    }

    return ans;
}
