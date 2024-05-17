import { TreeNode } from "./01.100";

export function tree2str(root: TreeNode | null): string {
    let ans = ""

    const dfs = (node: TreeNode | null) => {
        ans += "(" + node.val
        
        if (node.left) {
            dfs(node.left)
        } else if (node.right) {
            ans += "()"
        }

        if (node.right) {
            dfs(node.right)
        }

        ans += ")"
    }

    dfs(root)

    return ans.slice(1, -1)
}
