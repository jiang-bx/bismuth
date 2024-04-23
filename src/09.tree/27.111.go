package tree

func MinDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	lMin := MinDepth(root.Left)
	rMin := MinDepth(root.Right)

	if root.Left == nil || root.Right == nil {
		return lMin + rMin + 1
	}

	if lMin < rMin {
		return lMin + 1
	}

	return rMin + 1
}
