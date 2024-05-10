package tree

func SumOfLeftLeaves(root *TreeNode) int {
	var dfs func(node *TreeNode, isLeft bool)
	ans := 0
	dfs = func(node *TreeNode, isLeft bool) {
		if node == nil {
			return
		}

		if isLeft && node.Left == nil && node.Right == nil {
			ans += node.Val
		}

		dfs(node.Left, true)
		dfs(node.Right, false)
	}

	dfs(root, false)

	return ans
}
