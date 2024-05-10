package tree

func RightSideView(root *TreeNode) []int {
	ans := []int{}
	if root == nil {
		return ans
	}

	queue := []*TreeNode{root}

	for len(queue) > 0 {
		lastVal := 0
		for i := len(queue); i > 0; i-- {
			node := queue[0]
			queue = queue[1:]
			lastVal = node.Val
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
		ans = append(ans, lastVal)
	}

	return ans
}
