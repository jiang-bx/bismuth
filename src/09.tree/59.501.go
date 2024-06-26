package tree

func FindMode(root *TreeNode) []int {
	var dfs func(node *TreeNode)
	var preNode *TreeNode = nil
	ans := []int{}
	max := 0
	cur := 0

	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}

		dfs(node.Left)

		if preNode != nil && preNode.Val == node.Val {
			cur++
		} else {
			cur = 1
		}

		preNode = node

		if cur > max {
			max = cur
			ans = ans[:0]
		}

		if cur == max {
			ans = append(ans, node.Val)
		}

		dfs(node.Right)
	}

	dfs(root)

	return ans
}
