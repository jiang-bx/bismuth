package dbpointer

import "sort"

func FindRadius(houses []int, heaters []int) int {

	sort.Ints(houses)
	sort.Ints(heaters)

	ans := 0
	j := 0
	m := len(heaters)

	for i, v := range houses {
		cur := abs(v, heaters[j])
		for j < m && heaters[j] <= houses[i] {
			cur = houses[i] - heaters[j]
			j++
		}

		if j < m {
			val := abs(heaters[j], v)
			if cur > val {
				cur = val
			}
		}

		if ans < cur {
			ans = cur
		}

		if j > 0 {
			j--
		}
	}

	return ans
}

func abs(a, b int) int {
	if a > b {
		return a - b
	}

	return b - a
}
