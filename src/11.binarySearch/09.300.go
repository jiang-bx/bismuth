package array_greedy

// 动态规划
func LengthOfLIS1(nums []int) int {
	ans := 0
	n := len(nums)
	dp := make([]int, n)
	for i := range dp {
		dp[i] = 1
	}

	for i := range nums {
		for j := 0; j < i; j++ {
			if nums[j] < nums[i] {
				if dp[i] < dp[j]+1 {
					dp[i] = dp[j] + 1
				}
			}
		}
	}

	for _, v := range dp {
		if ans < v {
			ans = v
		}
	}

	return ans
}

// 二分法
func LengthOfLIS(nums []int) int {
	ans := 0
	n := len(nums)
	tails := make([]int, n)

	for _, num := range nums {
		i := 0
		j := ans

		for i < j {
			mid := i + (j-i)/2
			if tails[mid] < num {
				i = mid + 1
			} else {
				j = mid
			}
		}

		tails[i] = num

		if j == ans {
			ans++
		}

	}

	return ans
}
