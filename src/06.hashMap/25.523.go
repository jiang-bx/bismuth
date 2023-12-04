package hashmap

func CheckSubarraySum(nums []int, k int) bool {
	mp, sum := make(map[int]int), 0

	mp[0] = -1

	for i, v := range nums {
		sum += v
		if k != 0 {
			sum %= k
		}

		if s, ok := mp[sum]; ok {
			if i-s >= 2 {
				return true
			}
		} else {
			mp[sum] = i
		}
	}

	return false
}
