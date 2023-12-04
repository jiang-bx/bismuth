package hashmap

import "math"

func ContainsNearbyDuplicate(nums []int, k int) bool {
	numsMap := map[int]int{}

	for i := 0; i < len(nums); i++ {
		if v, ok := numsMap[nums[i]]; ok {
			if int(math.Abs(float64(v-i))) <= k {
				return true
			}
		}

		numsMap[nums[i]] = i
	}

	return false
}
