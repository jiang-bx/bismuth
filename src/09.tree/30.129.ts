import { TreeNode } from "./01.100";

export function sumNumbers(root: TreeNode | null): number {
    const path: number[] = []
    let ans = 0
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return
        }

        path.push(node.val)

        if (!node.left && !node.right) {
            ans += Number(path.join(''))
        }

        dfs(node.left)
        dfs(node.right)

        path.pop()
    }

    dfs(root)
    return ans
}
