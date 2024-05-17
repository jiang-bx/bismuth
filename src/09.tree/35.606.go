package tree

import (
	"strconv"
)

func Tree2str(root *TreeNode) string {
	var dfs func(node *TreeNode)
	ans := ""

	dfs = func(node *TreeNode) {
		ans += "(" + strconv.Itoa(node.Val)

		if node.Left != nil {
			dfs(node.Left)
		} else if node.Right != nil {
			ans += "()"
		}

		if node.Right != nil {
			dfs(node.Right)
		}

		ans += ")"
	}

	dfs(root)

	return ans[1 : len(ans)-1]
}
