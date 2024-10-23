package arraydp

func CheckRecord_552(n int) int {
	mod := 1e9 + 7
	dp := make([][2][3]int, n+1)
	dp[0] = [2][3]int{{1, 1, 1}, {1, 1, 1}}

	for i := 1; i <= n; i++ {
		for j := 0; j < 2; j++ {
			for k := 0; k < 3; k++ {
				res := dp[i-1][j][0]
				if j == 0 {
					res += dp[i-1][1][0]
				}

				if k < 2 {
					res += dp[i-1][j][k+1]
				}

				dp[i][j][k] = res % int(mod)
			}
		}
	}

	return dp[n][0][0]
}
