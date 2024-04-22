package tree

func FindTarget1(root *TreeNode, k int) bool {
	var dfs func(node *TreeNode) bool
	m := map[int]bool{}

	dfs = func(node *TreeNode) bool {
		if node == nil {
			return false
		}

		if _, ok := m[k-node.Val]; ok {
			return true
		}

		m[node.Val] = true

		return dfs(node.Left) || dfs(node.Right)
	}

	return dfs(root)
}

func FindTarget(root *TreeNode, k int) bool {
	var bts func(node *TreeNode)
	list := []int{}

	bts = func(node *TreeNode) {
		if node == nil {
			return
		}
		bts(node.Left)
		list = append(list, node.Val)
		bts(node.Right)
	}

	bts(root)

	l, r := 0, len(list)-1

	for l < r {
		sum := list[l] + list[r]
		if sum == k {
			return true
		} else if sum > k {
			r--
		} else {
			l++
		}
	}

	return false
}
