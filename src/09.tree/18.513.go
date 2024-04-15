package tree

// BFS
func FindBottomLeftValue1(root *TreeNode) int {
	ans := 0
	queue := []*TreeNode{root}
	for len(queue) > 0 {
		size := len(queue)
		ans = queue[0].Val
		for i := size; i > 0; i-- {
			node := queue[0]
			queue = queue[1:]

			if node.Left != nil {
				queue = append(queue, node.Left)
			}

			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
	}
	return ans
}

// DFS
func FindBottomLeftValue(root *TreeNode) int {
	var dfs func(*TreeNode, int)
	ans := 0
	max := 0

	dfs = func(tn *TreeNode, i int) {
		if tn == nil {
			return
		}

		if i > max {
			max = i
			ans = tn.Val
		}

		dfs(tn.Left, i+1)
		dfs(tn.Right, i+1)
	}

	dfs(root, 1)

	return ans
}
