package sub_array_greedy

import "math"

func MaxSubArray(nums []int) int {
	// 贪心
	// res := math.MinInt
	// sum := 0
	// for _, v := range nums {
	// 	sum += v
	// 	res = Max(res, sum)
	// 	if sum < 0 {
	// 		sum = 0
	// 	}
	// }
	// return res

	// 动态规划
	res := math.MinInt
	n := len(nums)
	dp := make([]int, n)
	dp[0] = nums[0]
	res = dp[0]

	for i := 1; i < n; i++ {
		dp[i] = Max(dp[i-1]+nums[i], nums[i])
		res = Max(dp[i], res)
	}

	return res
}

func Max(a, b int) int {
	if a < b {
		return b
	}
	return a
}
