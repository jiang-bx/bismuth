package tree

import "strconv"

func SumNumbers(root *TreeNode) int {
	var dfs func(node *TreeNode)
	ans := 0
	path := []int{}
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}

		path = append(path, node.Val)

		if node.Left == nil && node.Right == nil {
			// 合并,计算 ans
			str := ""
			for _, v := range path {
				str += strconv.Itoa(v)
			}

			val, _ := strconv.Atoi(str)

			ans += val
		}

		dfs(node.Left)
		dfs(node.Right)

		path = path[:len(path)-1]
	}

	dfs(root)

	return ans
}
