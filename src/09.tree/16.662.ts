import { TreeNode } from "./01.100";

// dfs
export function widthOfBinaryTree1(root: TreeNode | null): number {
    // 根据满二叉树的节点编号规则：
    // 若根节点编号为 u，
    // 则其左子节点编号为 u << 1 => u * 2，
    // 其右节点编号为 u << 1 | 1 => u * 2 + 1
    /**
     * 举例:
     * 4, 5 , 6, 7 , 8
     * 1  2   3  4   5
     *
     * 5 -> 2 = 1(4) * 2 = 2
     * 6 -> 3 = 1(4) * 2 + 1 = 3
     *
     *       4
     *    5     6
     * 7   8
     */

    // 这种解法不是一般人能想到的, 太巧妙了
    // 利用 map 记录, 每层最左侧起点
    // 同时 利用 u = u - map.get(depth) + 1, 为每层起点编号为 1
    // 只需要不断 递归, 就能求得这一层的最大宽度

    // key: depth, value: u
    const map = new Map<number, number>();
    let ans = 0;

    const dfs = (node: TreeNode | null, u: number, depth: number) => {
        if (!node) {
            return;
        }

        // 因为 dfs, 优先遍历本层的最左侧节点, 记录了本层起点
        if (!map.has(depth)) {
            map.set(depth, u);
        }

        // 当前节点 - 本层节点 = 当前宽度
        const diff = u - map.get(depth) + 1;

        // 取最大值就是结果
        ans = Math.max(ans, diff);

        // 对同层内的节点进行重新编号（使得同层最靠左的非空节点编号为 1）
        u = diff;

        dfs(node.left, u << 1, depth + 1);
        dfs(node.right, (u << 1) | 1, depth + 1);
    };

    dfs(root, 1, 0);

    return ans;
}

// BFS
export function widthOfBinaryTree(root: TreeNode | null): number {
    const queue: [TreeNode, bigint][] = [[root, 1n]];
    let ans = -1;

    while (queue.length) {
        const size = queue.length;
        // 终点 - 起点 = 本层宽度
        ans = Math.max(ans, Number(queue[size - 1][1] - queue[0][1] + 1n));

        for (let i = 0; i < size; i++) {
            const [node, index] = queue.shift();
            node.left && queue.push([node.left, index * 2n]);
            node.right && queue.push([node.right, index * 2n + 1n]);
        }
    }

    return ans;
}
