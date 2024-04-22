package tree

func MinDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	lMax := MinDepth(root.Left) + 1
	rMax := MinDepth(root.Right) + 1

	if lMax > rMax {
		return lMax
	}

	return rMax
}
