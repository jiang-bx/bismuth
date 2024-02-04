package dbpointer

import "sort"

func TriangleNumber(nums []int) int {

	sort.Ints(nums)
	ans := 0
	n := len(nums)

	for i := n - 1; i >= 2; i-- {
		l := 0
		r := i - 1

		for l < r {
			if nums[l]+nums[r] > nums[i] {
				ans += r - l
				r--
			} else {
				l++
			}
		}
	}

	return ans
}
