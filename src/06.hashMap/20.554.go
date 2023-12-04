package hashmap

func LeastBricks(wall [][]int) int {
	m := map[int]int{}

	for _, item := range wall {
		sum := 0
		for j := 0; j < len(item)-1; j++ {
			sum += item[j]
			m[sum] = m[sum] + 1
		}
	}

	ans := 0
	for _, v := range m {
		if v > ans {
			ans = v
		}
	}

	return len(wall) - ans
}
