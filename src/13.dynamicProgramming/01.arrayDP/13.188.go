package arraydp

func MaxProfit_188_1(k int, prices []int) int {
	n := len(prices)
	ans := make([]int, k*2+1)
	for i := range ans {
		if i%2 == 1 {
			ans[i] = -prices[0]
		}
	}

	for i := 1; i < n; i++ {
		for j := 1; j < len(ans); j++ {
			if j%2 == 1 {
				// 买入
				ans[j] = max(ans[j], ans[j-1]-prices[i])
			} else {
				// 卖出
				ans[j] = max(ans[j], ans[j-1]+prices[i])
			}
		}
	}

	return ans[len(ans)-1]
}

func MaxProfit_188(k int, prices []int) int {
	n := len(prices)
	kLen := k*2 + 1
	dp := make([][]int, n)

	for i := range dp {
		dp[i] = make([]int, kLen)
		for j := range dp[i] {
			if j%2 == 1 {
				dp[i][j] = -prices[0]
			} else {
				dp[i][j] = 0
			}
		}
	}

	for i := 1; i < n; i++ {
		for j := 1; j < kLen; j++ {
			if j%2 == 1 {
				// 买入
				dp[i][j] = max(dp[i-1][j], dp[i-1][j-1]-prices[i])
			} else {
				// 卖出
				dp[i][j] = max(dp[i-1][j], dp[i-1][j-1]+prices[i])
			}
		}
	}

	return dp[n-1][kLen-1]
}
