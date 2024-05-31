package tree

import "math"

func IsBalanced(root *TreeNode) bool {
	var dfs func(node *TreeNode) int
	dfs = func(node *TreeNode) int {
		if node == nil {
			return 0
		}

		l := dfs(node.Left)
		if l == -1 {
			return -1
		}

		r := dfs(node.Right)
		if r == -1 {
			return -1
		}

		if math.Abs(float64(l-r)) > 1 {
			return -1
		}

		if l > r {
			return l + 1
		}

		return r + 1
	}
	return dfs(root) != -1
}
