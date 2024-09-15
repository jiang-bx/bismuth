package contest

import "math"

type C_415 struct{}

// -------------------------- Q1 --------------------------------

func (c *C_415) GetSneakyNumbers(nums []int) []int {
	n := len(nums)
	ans := []int{}
	arr := make([]int, n)

	for _, v := range nums {
		arr[v]++
		if arr[v] > 1 {
			ans = append(ans, v)
		}
	}

	return ans
}

// -------------------------- Q2 --------------------------------

// 超时算法
func (c *C_415) MaxScore1(a []int, b []int) int64 {
	var res int64 = math.MinInt64
	var nb int = len(b)

	for i0 := 0; i0 < nb-3; i0++ {
		for i1 := i0 + 1; i1 < nb-2; i1++ {
			for i2 := i1 + 1; i2 < nb-1; i2++ {
				for i3 := i2 + 1; i3 < nb; i3++ {
					val := int64(a[0]*b[i0]) +
						int64(a[1]*b[i1]) +
						int64(a[2]*b[i2]) +
						int64(a[3]*b[i3])

					if val > res {
						res = val
					}
				}
			}
		}
	}

	return res
}

// 回溯算法也超时
func (c *C_415) MaxScore2(a []int, b []int) int64 {
	var res int64 = math.MinInt64
	var nb int = len(b)
	var dfs func(start int, dices []int)

	dfs = func(start int, dices []int) {
		if len(dices) == 4 {
			val := int64(a[0]*dices[0]) +
				int64(a[1]*dices[1]) +
				int64(a[2]*dices[2]) +
				int64(a[3]*dices[3])

			if val > res {
				res = val
			}
			return
		}

		for i := start; i < nb; i++ {
			dices = append(dices, b[i])
			dfs(i+1, dices)
			dices = dices[:len(dices)-1]
		}
	}

	dfs(0, []int{})

	return res
}

// 动态 DP
func (c *C_415) MaxScore(a []int, b []int) int64 {
	max := func(a int64, b int64) int64 {
		if a > b {
			return a
		}
		return b
	}

	dp := make([]int64, 5)
	for i := range dp {
		dp[i] = math.MinInt16
	}
	dp[0] = 0

	for _, v := range b {
		for i := 4; i >= 1; i-- {
			dp[i] = max(dp[i], dp[i-1]+int64(a[i-1]*v))
		}
	}

	return dp[4]
}
