package graph

func IntegerReplacement1(n int) int {
	ans := 0

	for n != 1 {
		if n&1 == 0 {
			n >>= 1
		} else if n == 3 || (n>>1)&1 == 0 {
			n--
		} else {
			n++
		}
		ans++
	}

	return ans
}

func IntegerReplacement(n int) int {
	var dfs func(num int) int
	m := map[int]int{}

	dfs = func(num int) int {
		if num == 1 {
			return 0
		}

		if v, ok := m[num]; ok {
			return v
		}

		ans := 0

		if num%2 == 0 {
			ans = dfs(num / 2)
		} else {
			a := dfs(num + 1)
			b := dfs(num - 1)

			if a > b {
				ans = b
			} else {
				ans = a
			}
		}

		ans++

		m[num] = ans

		return ans
	}

	return dfs(n)
}
