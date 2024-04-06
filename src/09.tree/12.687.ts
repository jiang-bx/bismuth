import { TreeNode } from "./01.100";

export function longestUnivaluePath(root: TreeNode | null): number {
    /**
     *      5
     *   4     5
     * 1   1     5
     */

    // 需要一个一个节点的查找,
    // 求的是边数(两个节点构成一条边), 不是节点数,

    let max = 0;

    const dfs = (node: TreeNode | null): number => {
        if (!node) {
            return 0;
        }

        let ans = 0;
        let cur = 0;
        let l = dfs(node.left);
        let r = dfs(node.right);

        if (node.left && node.left.val === node.val) {
            ans += l + 1;
            cur += l + 1;
        }

        if (node.right && node.right.val === node.val) {
            ans = Math.max(ans, r + 1);
            cur += r + 1;
        }

        max = Math.max(max, cur);

        return ans;
    };

    dfs(root);

    return max;
}
