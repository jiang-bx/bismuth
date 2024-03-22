package tree

func IsSymmetric(root *TreeNode) bool {
	if root == nil {
		return true
	}

	return dfs(root.Left, root.Right)
}

func dfs(l *TreeNode, r *TreeNode) bool {
	isL := l == nil
	isR := r == nil

	if isL && isR {
		return true
	}

	if isL || isR {
		return false
	}

	if l.Val != r.Val {
		return false
	}

	return dfs(l.Left, r.Right) && dfs(l.Right, r.Left)
}
