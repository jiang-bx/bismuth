package count

func FindSubstringInWraproundString(p string) int {
	max := func(a, b int) int {
		if a > b {
			return a
		}
		return b
	}
	dp := [26]int{}
	a := byte('a')
	k := 1
	ans := 0

	dp[p[0]-a]++

	for i := 1; i < len(p); i++ {
		curInt := p[i] - a
		prevInt := p[i-1] - a
		if (prevInt == 25 && curInt == 0) || prevInt+1 == curInt {
			k++
		} else {
			k = 1
		}
		dp[curInt] = max(dp[curInt], k)
	}

	for i := 0; i < 26; i++ {
		ans += dp[i]
	}

	return ans
}
