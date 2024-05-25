package tree

import "math"

func GetMinimumDifference(root *TreeNode) int {
	var dfs func(node *TreeNode)
	ans := math.MaxInt
	pre := -1
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}
		dfs(node.Left)
		if pre != -1 {
			if ans > node.Val-pre {
				ans = node.Val - pre
			}
		}
		pre = node.Val
		dfs(node.Right)
	}
	dfs(root)

	return ans
}
