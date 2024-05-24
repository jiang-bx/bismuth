package tree

func InorderTraversal(root *TreeNode) []int {
	var dfs func(node *TreeNode)
	ans := []int{}
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}

		dfs(node.Left)
		ans = append(ans, node.Val)
		dfs(node.Right)
	}
	dfs(root)
	return ans
}
