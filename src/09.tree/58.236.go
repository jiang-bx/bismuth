package tree

// root 只是二叉树
func LowestCommonAncestor1(root, p, q *TreeNode) *TreeNode {
	if root == nil || root.Val == p.Val || root.Val == q.Val {
		return root
	}

	left := LowestCommonAncestor1(root.Left, p, q)
	right := LowestCommonAncestor1(root.Right, p, q)

	if left == nil && right == nil {
		return nil
	}

	if left == nil {
		return right
	}

	if right == nil {
		return left
	}

	return root
}
