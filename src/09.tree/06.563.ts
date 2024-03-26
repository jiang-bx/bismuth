import { TreeNode } from "./01.100";

// 双递归实现
// export function findTilt(root: TreeNode | null): number {
//     if (!root) {
//         return 0;
//     }

//     return (
//         findTilt(root.left) +
//         findTilt(root.right) +
//         Math.abs(getSum(root.left) - getSum(root.right))
//     );
// }

// function getSum(root: TreeNode | null): number {
//     if (!root) {
//         return 0;
//     }

//     return getSum(root.left) + getSum(root.right) + root.val;
// }

export function findTilt(root: TreeNode | null): number {
    let ans = 0;

    function dfs(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }

        // 递归计算最下层的节点值
        let l = dfs(root.left);
        let r = dfs(root.right);
        ans += Math.abs(l - r);

        // 返回累加的值
        return l + r + root.val;
    }

    dfs(root);
    return ans;
}
