package array_greedy

func LongestPalindrome(s string) int {
	n := len(s)
	m := make([]int, 'z'+1)
	c := 0

	for _, v := range s {
		m[v]++
		if m[v]%2 == 0 {
			c += 2
		}
	}

	if c < n {
		c++
	}

	return c
}
