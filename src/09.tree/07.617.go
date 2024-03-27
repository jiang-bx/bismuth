package tree

func MergeTrees(root1 *TreeNode, root2 *TreeNode) *TreeNode {
	if root1 == nil {
		return root2
	}

	if root2 == nil {
		return root1
	}

	node := &TreeNode{}
	node.Val = root1.Val + root2.Val
	node.Left = MergeTrees(root1.Left, root2.Left)
	node.Right = MergeTrees(root1.Right, root2.Right)

	return node
}
