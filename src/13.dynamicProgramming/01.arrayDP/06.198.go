package arraydp

func Rob1(nums []int) int {
	n := len(nums)
	dp := make([]int, n+1)
	dp[0] = 0
	dp[1] = nums[0]

	for i := 2; i <= n; i++ {
		a := dp[i-2] + nums[i-1]
		b := dp[i-1]
		if a > b {
			dp[i] = a
		} else {
			dp[i] = b
		}
	}
	return dp[n]
}

func Rob(nums []int) int {

	cur := 0
	prev := 0

	for _, v := range nums {
		temp := prev + v
		if temp < cur {
			temp = cur
		}
		prev = cur
		cur = temp
	}

	return cur
}
