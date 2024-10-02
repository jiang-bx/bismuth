package array_greedy

func SplitArray(nums []int, k int) int {
	l := nums[0]
	r := 0

	for _, v := range nums {
		if v > l {
			l = v
		}
		r += v
	}

	for l < r {
		mid := l + (r-l)/2

		sum := 0
		cnt := 1

		for _, v := range nums {
			sum += v
			if sum > mid {
				sum = v
				cnt++
			}
		}

		if cnt > k {
			l = mid + 1
		} else {
			r = mid
		}
	}

	return l
}
