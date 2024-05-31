package tree

func DeleteNode(root *TreeNode, key int) *TreeNode {
	if root == nil {
		return nil
	}

	if key > root.Val {
		root.Right = DeleteNode(root.Right, key)
	} else if key < root.Val {
		root.Left = DeleteNode(root.Left, key)
	} else {
		if root.Left == nil {
			return root.Right
		}

		if root.Right == nil {
			return root.Left
		}

		node := root.Right

		for node.Left != nil {
			node = node.Left
		}

		node.Left = root.Left

		root = root.Right
	}

	return root
}
