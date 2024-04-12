package tree

// DFS
// func WidthOfBinaryTree(root *TreeNode) int {
// 	var dfs func(node *TreeNode, u int, depth int)
// 	m := map[int]int{}
// 	ans := 0

// 	dfs = func(node *TreeNode, u, depth int) {
// 		if node == nil {
// 			return
// 		}

// 		if _, ok := m[depth]; !ok {
// 			m[depth] = u
// 		}

// 		diff := u - m[depth] + 1

// 		if ans < diff {
// 			ans = diff
// 		}

// 		u = diff

// 		dfs(node.Left, u<<1, depth+1)
// 		dfs(node.Right, u<<1|1, depth+1)
// 	}

// 	dfs(root, 1, 0)

// 	return ans
// }

// BFS

type QueueItemWidthOfBinaryTree struct {
	node  *TreeNode
	index int64
}

func WidthOfBinaryTree(root *TreeNode) int {
	ans := 0
	queue := []*QueueItemWidthOfBinaryTree{{root, 1}}

	for len(queue) > 0 {
		size := len(queue)
		w := int(queue[size-1].index - queue[0].index + 1)

		if ans < w {
			ans = w
		}

		for i := 0; i < size; i++ {
			val := queue[0]
			queue = queue[1:]

			if val.node.Left != nil {
				queue = append(queue, &QueueItemWidthOfBinaryTree{val.node.Left, val.index * 2})
			}

			if val.node.Right != nil {
				queue = append(queue, &QueueItemWidthOfBinaryTree{val.node.Right, val.index*2 + 1})
			}
		}

	}

	return ans
}
