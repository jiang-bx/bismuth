package tree

import "math"

func IsValidBST(root *TreeNode) bool {
	var dfs func(node *TreeNode)
	ans := true
	pre := math.MinInt64
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}
		dfs(node.Left)
		if pre != math.MinInt64 && pre >= node.Val {
			ans = false
			return
		}
		pre = node.Val
		dfs(node.Right)
	}

	dfs(root)

	return ans
}
