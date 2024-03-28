import { TreeNode } from "./01.100";

export function findFrequentTreeSum(root: TreeNode | null): number[] {
    const map = {};
    let max = -Infinity;

    function getSum(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }
        const v = root.val + getSum(root.left) + getSum(root.right);
        map[v] = map[v] ? map[v] + 1 : 1;
        max = Math.max(max, map[v]);
        return v;
    }

    getSum(root);

    const ans: number[] = [];
    for (let key in map) {
        if (map[key] == max) {
            ans.push(Number(key));
        }
    }

    return ans;
}
