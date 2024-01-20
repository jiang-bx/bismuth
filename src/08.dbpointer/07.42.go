package dbpointer

func Trap(height []int) int {
	// 双指针最容易理解
	ans, l, r := 0, 0, len(height)-1
	for l < r {
		if height[l] <= height[r] {
			temp := height[l]
			l++
			for l < r && temp > height[l] {
				ans += temp - height[l]
				l++
			}
		} else {
			temp := height[r]
			r--
			for l < r && temp > height[r] {
				ans += temp - height[r]
				r--
			}
		}
	}
	return ans
}
