package arraydp

func MinSteps(n int) int {
	// n 个 A
	// k 个 A 需要的次数
	// f(k) =
	// const dp = ne
	dp := make([][]int, n+1)

	for i := 0; i <= n; i++ {
		dp[i] = make([]int, n+1)
		for j := 0; j <= n; j++ {
			dp[i][j] = n
		}
	}

	dp[1][1] = 0

	for i := 1; i <= n; i++ {
		minNum := dp[i][1]

		for j := 1; j <= i; j++ {
			if i-j >= 1 {
				val := dp[i-j][j] + 1
				if dp[i][j] > val {
					dp[i][j] = val
				}

				if minNum > dp[i][j] {
					minNum = dp[i][j]
				}
			}

			if i == j {
				dp[i][j] = minNum + 1
			}
		}
	}

	return dp[n][n] - 1
}
