package tree

func Flatten(root *TreeNode) {
	if root == nil {
		return
	}

	Flatten(root.Left)
	Flatten(root.Right)

	left := root.Left
	right := root.Right

	root.Left = nil
	root.Right = left

	for root.Right != nil {
		root = root.Right
	}

	root.Right = right

}
