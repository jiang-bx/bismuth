package dbpointer

import (
	"math"
	"sort"
)

func ThreeSumClosest(nums []int, target int) int {
	sort.Ints(nums)

	ans := nums[0] + nums[1] + nums[2]

	for i := 0; i < len(nums); i++ {
		l := i + 1
		r := len(nums) - 1

		for l < r {
			sum := nums[i] + nums[l] + nums[r]
			if math.Abs(float64(target-sum)) < math.Abs(float64(target-ans)) {
				ans = sum
			}

			if sum < target {
				l++
			} else if sum > target {
				r--
			} else {
				return ans
			}
		}
	}

	return ans
}
