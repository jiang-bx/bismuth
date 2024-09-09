package array_greedy

func SingleNonDuplicate(nums []int) int {
	n := len(nums)
	l := 0
	r := n - 1

	for l < r {
		mid := l + (r-l)/2

		if mid%2 == 0 {
			if mid+1 < n && nums[mid] == nums[mid+1] {
				l = mid + 1
			} else {
				r = mid
			}
		} else {
			if mid-1 >= 0 && nums[mid] == nums[mid-1] {
				l = mid + 1
			} else {
				r = mid
			}
		}
	}

	return nums[r]
}
