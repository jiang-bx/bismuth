package tree

// BFS
func AverageOfLevels(root *TreeNode) []float64 {
	ans := []float64{}
	if root == nil {
		return ans
	}

	queue := []*TreeNode{root}

	for len(queue) > 0 {
		total := float64(0)
		size := len(queue)
		for i := size; i > 0; i-- {
			node := queue[0]
			queue = queue[1:]

			total += float64(node.Val)

			if node.Left != nil {
				queue = append(queue, node.Left)
			}

			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}

		ans = append(ans, total/float64(size))
	}

	return ans
}
