package arraydp

import "math"

func NthUglyNumber(n int) int {
	// k 个整数
	// f(1) = 1
	// f(2) = 2

	dp := make([]int, n)
	dp[0] = 1

	p2 := 0
	p3 := 0
	p5 := 0

	for i := 1; i < n; i++ {
		n2 := dp[p2] * 2
		n3 := dp[p3] * 3
		n5 := dp[p5] * 5

		dp[i] = min([]int{n2, n3, n5})

		if dp[i] == n2 {
			p2++
		}

		if dp[i] == n3 {
			p3++
		}

		if dp[i] == n5 {
			p5++
		}
	}

	return dp[n-1]
}

func min(nums []int) int {
	if len(nums) == 0 {
		return math.MinInt
	}

	min := math.MaxInt
	for _, v := range nums {
		if v < min {
			min = v
		}
	}
	return min
}
