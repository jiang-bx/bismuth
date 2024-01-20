package dbpointer

func MaxArea(height []int) int {
	l := 0
	r := len(height) - 1
	ans := 0

	for l < r {
		area := 0

		if height[l] <= height[r] {
			area = height[l] * (r - l)
			l++
		} else {
			area = height[r] * (r - l)
			r--
		}

		if ans < area {
			ans = area
		}
	}

	return ans
}
