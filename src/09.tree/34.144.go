package tree

func PreorderTraversal(root *TreeNode) []int {
	var dfs func(node *TreeNode)
	ans := []int{}
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}

		ans = append(ans, node.Val)
		dfs(node.Left)
		dfs(node.Right)
	}

	dfs(root)

	return ans
}
