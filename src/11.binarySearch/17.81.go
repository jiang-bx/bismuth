package array_greedy

func Search81(nums []int, target int) bool {
	l := 0
	r := len(nums) - 1

	for l <= r {
		mid := l + (r-l)/2
		if nums[mid] == target {
			return true
		}

		if nums[l] == nums[mid] {
			l++
			continue
		}

		if nums[mid] > nums[l] {
			if target >= nums[l] && target < nums[mid] {
				r = mid - 1
			} else {
				l = mid + 1
			}
		} else {
			if target > nums[mid] && target <= nums[r] {
				l = mid + 1
			} else {
				r = mid - 1
			}
		}
	}
	return false
}
