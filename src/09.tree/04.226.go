package tree

func InvertTree(root *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}

	temp := InvertTree(root.Left)
	root.Left = InvertTree(root.Right)
	root.Right = temp

	return root
}
