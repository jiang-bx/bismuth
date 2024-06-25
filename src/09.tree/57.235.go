package tree

// root 是 二叉搜索树
func LowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	// 保证 p.Val < q.Val
	if p.Val > q.Val {
		tmp := p
		p = q
		q = tmp
	}

	for root != nil {
		if root.Val < p.Val {
			root = root.Right
		} else if root.Val > q.Val {
			root = root.Left
		} else {
			break
		}
	}

	return root
}
