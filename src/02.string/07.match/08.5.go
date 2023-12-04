package match

func LongestPalindrome(s string) string {
	/**
	// 中心扩展法
	n := len(s)

	if n < 1 {
		return ""
	}

	expandAroundCenter := func(left, right int) int {
		for left >= 0 && right < n && s[left] == s[right] {
			left--
			right++
		}

		return right - left - 1
	}

	start, end := 0, 0

	for i := 0; i < n; i++ {
		a1 := expandAroundCenter(i, i)
		a2 := expandAroundCenter(i, i+1)
		a := a1
		if a1 < a2 {
			a = a2
		}

		if a > end-start {
			start = i - (a-1)/2
			end = i + a/2
		}
	}

	return s[start:(end + 1)]
	*/

	n := len(s)
	res := ""
	for i := 0; i < n; i++ {
		left := i
		right := i
		for right < n-1 && s[right] == s[right+1] {
			right++
		}

		for left > 0 && right < n-1 && s[left-1] == s[right+1] {
			left--
			right++
		}

		if right-left+1 > len(res) {
			res = s[left : right+1]
		}
	}

	return res
}
