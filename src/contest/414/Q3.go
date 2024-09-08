package c_414

// 超时算法
func FindMaximumScore1(nums []int) int64 {
	var n = len(nums)
	dp := make([]int64, n)
	dp[0] = 0

	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			score := int64((j - i) * nums[i])
			if dp[j] < dp[i]+score {
				dp[j] = dp[i] + score
			}
		}
	}

	return dp[n-1]
}

func FindMaximumScore2(nums []int) int64 {
	var n = len(nums)
	var ans int64 = 0
	var mx = int64(nums[0])
	// 不知道为啥能过
	for i := 1; i < n; i++ {
		ans += mx
		if mx < int64(nums[i]) {
			mx = int64(nums[i])
		}
	}
	return ans
}

func FindMaximumScore(nums []int) int64 {
	var n = len(nums)
	ans := 0
	i := 0
	for j := 1; j < n; j++ {
		if j == n-1 || nums[j] > nums[i] {
			ans += nums[i] * (j - i)
			i = j
		}
	}
	return int64(ans)
}
