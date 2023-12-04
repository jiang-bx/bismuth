package hashmap

import (
	"math"
	"strconv"
)

func FindPairs(nums []int, k int) int {
	set := map[string]bool{}
	count := 0
	for i, v := range nums {
		for j := i + 1; j < len(nums); j++ {
			key1 := strconv.Itoa(v) + "-" + strconv.Itoa(nums[j])
			key2 := strconv.Itoa(nums[j]) + "-" + strconv.Itoa(v)
			if int(math.Abs(float64(v-nums[j]))) == k && (!set[key1] || !set[key2]) {
				count++
				set[key1] = true
				set[key2] = true
			}
		}
	}
	return count
}
