package tree

import "strconv"

func FindDuplicateSubtrees(root *TreeNode) []*TreeNode {
	var dfs func(node *TreeNode) string
	ans := []*TreeNode{}
	m := map[string]int{}

	dfs = func(node *TreeNode) string {
		if node == nil {
			return " "
		}

		key := strconv.Itoa(node.Val) + "_" + dfs(node.Left) + dfs(node.Right)

		m[key]++

		if m[key] == 2 {
			ans = append(ans, node)
		}

		return key
	}

	dfs(root)

	return ans
}
