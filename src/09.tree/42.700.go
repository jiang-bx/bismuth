package tree

func SearchBST(root *TreeNode, val int) *TreeNode {
	if root == nil {
		return nil
	}

	if val > root.Val {
		return SearchBST(root.Right, val)
	} else if val < root.Val {
		return SearchBST(root.Left, val)
	}

	return root
}
