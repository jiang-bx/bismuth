package arraydp

func NumDecodings_639(s string) int {
	const mod int = 1e9 + 7
	n := len(s)
	dp := make([]int, n+1)
	dp[0] = 1

	for i, v := range s {
		// 一位
		if v == '*' {
			dp[i+1] = dp[i] * 9
		} else {
			one := int(v - '0')
			if one >= 1 && one <= 9 {
				dp[i+1] = dp[i]
			}
		}

		if i < 1 {
			continue
		}

		// 两位
		if v == '*' {
			if s[i-1] == '*' {
				dp[i+1] += dp[i-1] * 15
			} else if s[i-1] == '1' {
				dp[i+1] += dp[i-1] * 9
			} else if s[i-1] == '2' {
				dp[i+1] += dp[i-1] * 6
			}
		} else {
			one := int(v - '0')
			if s[i-1] == '*' {
				if one <= 6 {
					dp[i+1] += dp[i-1] * 2
				} else {
					dp[i+1] += dp[i-1]
				}
			} else {
				two := int(s[i-1]-'0')*10 + one
				if two >= 10 && two <= 26 {
					dp[i+1] += dp[i-1]
				}
			}
		}

		dp[i+1] %= mod
	}

	return dp[n]
}
