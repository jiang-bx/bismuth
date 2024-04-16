import { TreeNode } from "./01.100";

// BFS
export function largestValues1(root: TreeNode | null): number[] {
    const ans: number[] = [];

    if (!root) {
        return ans;
    }

    const queue: TreeNode[] = [root];

    while (queue.length) {
        let size = queue.length;
        let max = -Infinity;
        while (size > 0) {
            const node = queue.shift();
            max = Math.max(max, node.val);

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            size--;
        }
        ans.push(max);
    }

    return ans;
}

// DFS
export function largestValues(root: TreeNode | null): number[] {
    const ans: number[] = [];
    const map = new Map<number, number>();
    const dfs = (node: TreeNode | null, depth: number) => {
        if (!node) {
            return;
        }

        if (!map.has(depth)) {
            map.set(depth, node.val);
        }

        map.set(depth, Math.max(map.get(depth), node.val));

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    };

    dfs(root, 0);

    map.forEach((val, key) => {
        ans[key] = val;
    });

    return ans;
}
