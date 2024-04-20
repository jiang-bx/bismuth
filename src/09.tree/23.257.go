package tree

import "strconv"

func BinaryTreePaths(root *TreeNode) []string {
	var dfs func(*TreeNode, string)
	ans := []string{}

	dfs = func(tn *TreeNode, s string) {
		if tn == nil {
			return
		}

		if s == "" {
			s += strconv.Itoa(tn.Val)
		} else {
			s += "->" + strconv.Itoa(tn.Val)
		}

		if tn.Left == nil && tn.Right == nil {
			ans = append(ans, s)
			return
		}

		dfs(tn.Left, s)
		dfs(tn.Right, s)
	}

	dfs(root, "")

	return ans
}
