package hashmap

func Intersection(nums1 []int, nums2 []int) []int {
	hashTable := map[int]int{}
	res := []int{}
	for _, v := range nums1 {
		hashTable[v] = 1
	}
	for _, v := range nums2 {
		if hashTable[v] == 1 {
			hashTable[v] = 2
			res = append(res, v)
		}
	}
	return res
}
