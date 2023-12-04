package hashmap

func FindMaxLength(nums []int) int {
	cur, ans, mp := 0, 0, map[int]int{0: -1}
	for i, v := range nums {
		if v == 0 {
			cur--
		} else {
			cur++
		}

		if m, ok := mp[cur]; ok {
			if i-m > ans {
				ans = i - m
			}
		} else {
			mp[cur] = i
		}
	}

	return ans
}
