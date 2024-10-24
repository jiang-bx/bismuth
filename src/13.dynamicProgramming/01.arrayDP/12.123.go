package arraydp

func MaxProfit_123_1(prices []int) int {
	// 五中状态
	// 没有操作, 第一次持有, 第一次不持有, 第二次持有, 第二次不持有

	// dp[i][j], j -> [0, 4] 五个状态,
	// dp[i][j] 表示第 i 天, 状态 j 所剩余的最大现金

	// dp[i][1] 第一次买入或者不买
	//   买入: dp[i][1] = dp[i-1][0] - prices[i]
	//   不买:  dp[i][1] =  dp[i-1][1], 延续之前的状态

	// dp[i][2] 第一次卖出或者不卖
	//  卖出: dp[i][2] = dp[i-1][1] + prices[1]
	//  不卖: dp[i][2] = dp[i-1][2], 延续之前的状态

	// dp[i][3] 第二次买入或者不买
	//   买入: dp[i][3] = dp[i-1][2] - prices[i]
	//   不买: dp[i][3] = dp[i-1][3], 延续之前的状态

	// dp[i][4] 第二次卖出或者不卖
	//   卖出: dp[i][4] = dp[i-1][3] + prices[i]
	//   不卖: dp[i][4] = dp[i-1][4], 延续之前的状态

	// 第 0 天, 各个状态操作后剩余的现金
	// dp[0][0], 没有操作  = 0
	// dp[0][1], 第一次买入  = -prices[i]
	// dp[0][2], 第一次卖出  = 0
	// dp[0][3], 第二次买入  = -prices[i]
	// pd[0][4], 第二次卖出  = 0

	n := len(prices)
	dp := make([][]int, n)
	for i := range dp {
		dp[i] = make([]int, 5)
	}

	dp[0][0] = 0
	dp[0][1] = -prices[0]
	dp[0][2] = 0
	dp[0][3] = -prices[0]
	dp[0][4] = 0

	for i := 1; i < n; i++ {
		dp[i][0] = dp[i-1][0]
		dp[i][1] = max(dp[i-1][0]-prices[i], dp[i-1][1])
		dp[i][2] = max(dp[i-1][1]+prices[i], dp[i-1][2])
		dp[i][3] = max(dp[i-1][2]-prices[i], dp[i-1][3])
		dp[i][4] = max(dp[i-1][3]+prices[i], dp[i-1][4])
	}

	return dp[n-1][4]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func MaxProfit_123(prices []int) int {
	n := len(prices)
	a1 := -prices[0]
	b1 := 0
	a2 := -prices[0]
	b2 := 0

	for i := 1; i < n; i++ {
		a1 = max(a1, 0-prices[i])
		b1 = max(b1, a1+prices[i])
		a2 = max(a2, b1-prices[i])
		b2 = max(b2, a2+prices[i])
	}

	return b2
}
