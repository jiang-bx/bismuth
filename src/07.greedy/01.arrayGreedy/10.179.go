package array_greedy

import (
	"sort"
	"strconv"
)

func LargestNumber(nums []int) string {
	sort.Slice(nums, func(i, j int) bool {
		a := strconv.Itoa(nums[i])
		b := strconv.Itoa(nums[j])
		return b+a < a+b
	})

	if nums[0] == 0 {
		return "0"
	}

	res := ""

	for _, v := range nums {
		res += strconv.Itoa(v)
	}

	return res
}
