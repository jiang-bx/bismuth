package tree

func KthSmallest(root *TreeNode, k int) int {
	var dfs func(node *TreeNode)
	ans := 0
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}

		dfs(node.Left)

		if k == 1 {
			ans = node.Val
			k--
			return
		}
		k--
		dfs(node.Right)
	}

	dfs(root)

	return ans
}
