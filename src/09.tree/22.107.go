package tree

import "slices"

// BFS
func LevelOrderBottom(root *TreeNode) [][]int {
	ans := [][]int{}
	if root == nil {
		return ans
	}
	queue := []*TreeNode{root}

	for len(queue) > 0 {
		size := len(queue)
		temp := []int{}

		for i := size; i > 0; i-- {
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

	slices.Reverse(ans)

	return ans
}
