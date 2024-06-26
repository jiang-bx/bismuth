package tree

func PostorderTraversal(root *TreeNode) []int {
	var dfs func(node *TreeNode)
	ans := []int{}
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}

		dfs(node.Left)
		dfs(node.Right)
		ans = append(ans, node.Val)
	}
	dfs(root)
	return ans
}
