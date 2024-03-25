package tree

// 双遍历
// func dfs1(root *TreeNode, targetSum int) int {
// 	if root == nil {
// 		return 0
// 	}

// 	targetSum -= root.Val

// 	ans := 0
// 	if targetSum == 0 {
// 		ans = 1
// 	}

// 	return ans + dfs1(root.Left, targetSum) + dfs1(root.Right, targetSum)
// }
// func PathSum(root *TreeNode, targetSum int) int {
// 	if root == nil {
// 		return 0
// 	}
// 	return dfs1(root, targetSum) + PathSum(root.Left, targetSum) + PathSum(root.Right, targetSum)
// }

// 前缀和
var m = map[int]int{}

func dfs1(node *TreeNode, curSum int, targetSum int) int {
	if node == nil {
		return 0
	}

	ans := 0
	curSum += node.Val
	if v, ok := m[curSum-targetSum]; ok {
		ans += v
	}

	m[curSum]++

	l := dfs1(node.Left, curSum, targetSum)
	r := dfs1(node.Right, curSum, targetSum)

	ans += l + r

	m[curSum]--

	return ans
}

func PathSum(root *TreeNode, targetSum int) int {
	m[0] = 1
	return dfs1(root, 0, targetSum)
}
