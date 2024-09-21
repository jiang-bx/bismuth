package array_greedy

func FindMinHard(nums []int) int {
	n := len(nums)
	l := 0
	r := n - 1

	for l < r {
		mid := l + (r-l)/2
		if nums[mid] > nums[n-1] {
			l = mid + 1
		} else {
			r = mid
		}
	}
	return nums[l]
}
