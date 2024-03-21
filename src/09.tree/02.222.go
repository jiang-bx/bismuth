package tree

func CountNodes(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return 1 + CountNodes(root.Left) + CountNodes(root.Right)
}
