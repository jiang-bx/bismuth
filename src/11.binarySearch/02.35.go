package array_greedy

func SearchInsert(nums []int, target int) int {

	n := len(nums)
	l := 0
	r := n - 1

	for l <= r {
		mid := l + (r-l)/2

		if nums[mid] == target {
			return mid
		} else if nums[mid] > target {
			r = mid - 1
		} else {
			l = mid + 1
		}
	}

	return l
}
