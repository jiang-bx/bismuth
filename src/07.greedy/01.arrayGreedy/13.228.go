package array_greedy

import "strconv"

func SummaryRanges(nums []int) []string {
	n := len(nums)
	i := 0
	res := []string{}

	for i < n {
		low := i
		i++
		for i < n && nums[i] == nums[i-1]+1 {
			i++
		}
		high := i - 1
		str := strconv.Itoa(nums[low])
		if low < high {
			str += "->" + strconv.Itoa(nums[high])
		}

		res = append(res, str)
	}

	return res
}
