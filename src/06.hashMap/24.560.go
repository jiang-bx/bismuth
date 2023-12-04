package hashmap

func SubarraySum(nums []int, k int) int {
	// count := 0
	// for i := 0; i < len(nums); i++ {
	// 	sum := 0
	// 	for j := i; j < len(nums); j++ {
	// 		sum += nums[j]
	// 		if sum == k {
	// 			count++
	// 		}
	// 	}
	// }
	// return count

	// 利用 map 优化前缀和
	sum, count, mp := 0, 0, make(map[int]int)
	mp[0] = 1

	for _, n := range nums {
		sum += n
		if v, ok := mp[sum-k]; ok {
			count += v
		}

		mp[sum]++
	}

	return count
}
