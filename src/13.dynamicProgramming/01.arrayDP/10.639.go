package arraydp

func NumDecodings_639(s string) int {
	n := len(s)
	dp := make([]int, n+1)
	dp[0] = 1

	for i := 0; i < n; i++ {
		one := int(s[i] - '0')
		if one >= 1 && one <= 9 {
			dp[i+1] = dp[i]
		}

		two := 0
		if i >= 1 {
			two = int(s[i-1]-'0')*10 + one
		}
		if two >= 10 && two <= 26 {
			dp[i+1] += dp[i-1]
		}
	}

	return dp[n]
}
