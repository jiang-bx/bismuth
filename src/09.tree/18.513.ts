import { TreeNode } from "./01.100";

// BFS
export function findBottomLeftValue1(root: TreeNode | null): number {
    let ans = root.val;
    const queue: TreeNode[] = [root];
    while (queue.length) {
        let size = queue.length;
        ans = queue[0].val;

        while (size > 0) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            size--;
        }
    }

    return ans;
}

// DFS
export function findBottomLeftValue(root: TreeNode | null): number {
    let ans = 0;
    let max = 0;

    const dfs = (node: TreeNode | null, depth: number) => {
        if (!node) {
            return;
        }

        if (depth > max) {
            max = depth;
            ans = node.val;
        }

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    };

    dfs(root, 1);

    return ans;
}
