package array_greedy

func DistributeCandies(candyType []int) int {
	m := map[int]bool{}
	n := len(candyType) / 2
	c := 0

	for _, v := range candyType {
		if !m[v] {
			m[v] = true
			c++
		}
	}

	if n < c {
		return n
	}

	return c
}
