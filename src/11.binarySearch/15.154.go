package array_greedy

func FindMinHard1(nums []int) int {
	n := len(nums)
	for i := 1; i < n; i++ {
		if nums[i] < nums[i-1] {
			return nums[i]
		}
	}
	return nums[0]
}

func FindMinHard(nums []int) int {
	n := len(nums)
	l := 0
	r := n - 1

	for l < r {
		mid := l + (r-l)/2
		if nums[mid] < nums[r] {
			r = mid
		} else if nums[mid] > nums[r] {
			l = mid + 1
		} else {
			r--
		}
	}

	return nums[l]
}
