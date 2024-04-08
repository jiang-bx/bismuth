package tree

func LevelOrder(root *TreeNode) [][]int {
	ans := [][]int{}

	if root == nil {
		return ans
	}

	queue := []*TreeNode{root}

	for len(queue) > 0 {
		temp := []int{}

		for i := len(queue); i > 0; i-- {
			node := queue[0]
			queue = queue[1:]
			temp = append(temp, node.Val)

			if node.Left != nil {
				queue = append(queue, node.Left)
			}

			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}

		ans = append(ans, temp)
	}

	return ans
}
