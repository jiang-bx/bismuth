package arraydp

func MaxProfit_309(prices []int) int {

	// 定义:
	// dp[i][0]: 第 i 天结束前 持有 股票的最大利润
	// dp[i][1]: 第 i 天结束前 不持有 股票的最大利润

	// 初始化:
	// dp[0][0] = -prices[0]
	// dp[0][1] = 0

	// 转移方程
	// 1. 第 i 天结束前 持有
	//   本来就持有: dp[i-1][0]
	//   本来不持有, 买入, 昨天是冷冻期, 只能前天卖出: dp[i-2][1] - prices[i]
	// 2. 第 i 天结束前 不持有
	//   本来就不持有:  dp[i-1][1]
	//   本来持有, 卖出: dp[i-1][0] + prces[i]
	n := len(prices)
	dp := make([][]int, n)
	for i := range dp {
		dp[i] = []int{0, 0}
	}

	dp[0][0] = -prices[0]
	dp[0][1] = 0

	for i := 1; i < n; i++ {
		val0 := -prices[i]
		if i >= 2 {
			val0 = dp[i-2][1] + val0
		}
		dp[i][0] = max(dp[i-1][0], val0)
		dp[i][1] = max(dp[i-1][1], dp[i-1][0]+prices[i])
	}

	return dp[n-1][1]
}
