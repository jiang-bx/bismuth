package dbpointer

func MinSubArrayLen(target int, nums []int) int {

	n := len(nums)
	res := n + 1
	sum := 0
	j := 0

	for i := 0; i < n; i++ {
		sum += nums[i]
		for sum >= target {
			if res > i-j+1 {
				res = i - j + 1
			}
			sum -= nums[j]
			j++
		}
	}

	if res > n {
		return 0
	}

	return res
}
