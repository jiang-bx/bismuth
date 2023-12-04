package hashmap

func FourSumCount(nums1 []int, nums2 []int, nums3 []int, nums4 []int) int {
	count, mp := 0, make(map[int]int)

	for _, i := range nums1 {
		for _, j := range nums2 {
			mp[i+j] = mp[i+j] + 1
		}
	}

	for _, k := range nums3 {
		for _, l := range nums4 {
			count += mp[0-(k+l)]
		}
	}

	return count
}
