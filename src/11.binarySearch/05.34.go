package array_greedy

func SearchRange1(nums []int, target int) []int {
	n := len(nums)
	l := 0
	r := n - 1

	for l <= r {
		mid := l + (r-l)/2
		if nums[mid] == target {
			i := mid
			for i < n && nums[i] == target {
				i++
			}

			j := mid
			for j >= 0 && nums[j] == target {
				j--
			}

			return []int{j + 1, i - 1}
		} else if nums[mid] > target {
			r = mid - 1
		} else {
			l = mid + 1
		}

	}

	return []int{-1, -1}
}

func SearchRange(nums []int, target int) []int {
	start := lowerBound(nums, target)
	if start == len(nums) || nums[start] != target {
		return []int{-1, -1}
	}

	end := lowerBound(nums, target+1) - 1
	return []int{start, end}
}

func lowerBound(nums []int, target int) int {
	n := len(nums)
	l := 0
	r := n - 1
	for l <= r {
		mid := l + (r-l)/2
		if nums[mid] < target {
			l = mid + 1
		} else {
			r = mid - 1
		}

	}
	return l
}
