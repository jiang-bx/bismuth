import { TreeNode } from "./01.100";

// 双递归遍历查找
// export function pathSum(root: TreeNode | null, targetSum: number): number {
//     if (!root) {
//         return 0;
//     }

//     return (
//         dfs(root, targetSum) +
//         pathSum(root.left, targetSum) +
//         pathSum(root.right, targetSum)
//     );
// }

// function dfs(root: TreeNode | null, targetSum: number): number {
//     if (!root) {
//         return 0;
//     }
//     targetSum -= root.val;
//     const ans = targetSum === 0 ? 1 : 0;
//     return ans + dfs(root.left, targetSum) + dfs(root.right, targetSum);
// }

// 前缀和解决
export function pathSum(root: TreeNode | null, targetSum: number): number {
    const map = new Map<number, number>();
    map.set(0, 1);

    const dfs = (node: TreeNode | null, curSum: number) => {
        if (!node) {
            return 0;
        }
        let ans = 0;
        curSum += node.val;
        ans += map.has(curSum - targetSum) ? map.get(curSum - targetSum) : 0;

        map.set(curSum, (map.has(curSum) ? map.get(curSum) : 0) + 1);

        const l = dfs(node.left, curSum);
        const r = dfs(node.right, curSum);

        ans += l + r;

        map.set(curSum, map.get(curSum) - 1);

        return ans;
    };

    return dfs(root, 0);
}
