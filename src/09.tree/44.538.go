package tree

func ConvertBST(root *TreeNode) *TreeNode {
	var dfs func(node *TreeNode)
	pre := 0
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}
		dfs(node.Right)
		node.Val += pre
		pre = node.Val
		dfs(node.Left)
	}
	dfs(root)
	return root
}
