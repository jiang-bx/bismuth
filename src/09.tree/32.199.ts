import { TreeNode } from "./01.100";

export function rightSideView(root: TreeNode | null): number[] {
    const ans: number[] = []

    if (!root) {
        return ans
    }

    const queue: TreeNode[] = [root]

    while (queue.length) {
        let lastVal = 0
        for (let i = queue.length; i > 0; i--) {
            const node = queue.shift()
            lastVal = node.val
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        ans.push(lastVal)
    }

    return ans;
}
