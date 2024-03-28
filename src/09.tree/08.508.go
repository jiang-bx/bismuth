package tree

import "math"

var mp map[int]int
var max = math.MinInt

func FindFrequentTreeSum(root *TreeNode) []int {
	mp = map[int]int{}
	max = math.MinInt

	dfs508(root)

	ans := []int{}

	for k, v := range mp {
		if v == max {
			ans = append(ans, k)
		}
	}

	return ans
}

func dfs508(root *TreeNode) int {
	if root == nil {
		return 0
	}

	v := root.Val + dfs508(root.Left) + dfs508(root.Right)
	mp[v]++

	if mp[v] > max {
		max = mp[v]
	}

	return v
}
