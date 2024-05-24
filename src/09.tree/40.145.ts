import { TreeNode } from "./01.100";

export function postorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = []
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return
        }

        dfs(node.left)
        dfs(node.right)
        ans.push(node.val)
    }

    dfs(root)
    
    return ans;
}
