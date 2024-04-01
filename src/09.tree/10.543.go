package tree

func DiameterOfBinaryTree(root *TreeNode) int {
	var ans int = 0
	var dfs func(t *TreeNode) int
	dfs = func(t *TreeNode) int {
		if t == nil {
			return 0
		}

		l := dfs(t.Left)
		r := dfs(t.Right)

		if ans < l+r {
			ans = l + r
		}

		if l < r {
			return r + 1
		}
		return l + 1
	}
	dfs(root)
	return ans
}
