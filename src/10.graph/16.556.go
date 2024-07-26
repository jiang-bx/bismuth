package graph

import (
	"fmt"
	"math"
)

func NextGreaterElement(n int) int {
	nSrt := fmt.Sprintf("%d", n)
	nums := []int{}

	for _, v := range nSrt {
		nums = append(nums, int(v-'0'))
	}

	m := len(nums)

	if m <= 1 {
		return -1
	}

	i := m - 2
	j := m - 1
	k := m - 1

	for i >= 0 && nums[i] >= nums[j] {
		i--
		j--
	}

	if i >= 0 {
		for nums[i] >= nums[k] {
			k--
		}

		nums[i], nums[k] = nums[k], nums[i]
	}

	for i, o := j, m-1; i < o; i, o = i+1, o-1 {
		nums[i], nums[o] = nums[o], nums[i]
	}

	var ans int64 = 0

	for _, v := range nums {
		ans = ans*10 + int64(v)
	}

	if ans > math.MaxInt32 || ans <= int64(n) {
		return -1
	}

	return int(ans)
}
