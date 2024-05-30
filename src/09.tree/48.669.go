package tree

func TrimBST(root *TreeNode, low int, high int) *TreeNode {
	if root == nil {
		return nil
	}

	if root.Val < low {
		// 左子树不符合, 右子树可能符合
		return TrimBST(root.Right, low, high)
	}

	if root.Val > high {
		// 右子树不符合, 左子树可能符合
		return TrimBST(root.Left, low, high)
	}

	root.Left = TrimBST(root.Left, low, high)
	root.Right = TrimBST(root.Right, low, high)

	return root
}
