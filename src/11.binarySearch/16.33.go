package array_greedy

func Search1(nums []int, target int) int {
	for i, v := range nums {
		if v == target {
			return i
		}
	}
	return -1
}

func Search(nums []int, target int) int {

	l := 0
	r := len(nums) - 1

	for l <= r {
		mid := l + (r-l)/2
		if nums[mid] == target {
			return mid
		}

		if nums[mid] >= nums[l] { // 在左半段
			if target >= nums[l] && target < nums[mid] {
				// target 在左半段
				r = mid - 1
			} else {
				// target 在右半段
				l = mid + 1
			}

		} else { // 在右半段
			if target > nums[mid] && target <= nums[r] {
				l = mid + 1
			} else {
				r = mid - 1
			}
		}
	}

	return -1
}
