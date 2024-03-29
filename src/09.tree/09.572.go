package tree

func IsSubtree(root *TreeNode, subRoot *TreeNode) bool {
	if subRoot == nil {
		return true
	}
	if root == nil {
		return false
	}
	return IsSubtree(root.Left, subRoot) || IsSubtree(root.Right, subRoot) || isSame(root, subRoot)
}

func isSame(root1 *TreeNode, root2 *TreeNode) bool {
	if root1 == nil && root2 == nil {
		return true
	}
	if root1 == nil || root2 == nil {
		return false
	}
	if root1.Val != root2.Val {
		return false
	}

	return isSame(root1.Left, root2.Left) && isSame(root1.Right, root2.Right)
}
