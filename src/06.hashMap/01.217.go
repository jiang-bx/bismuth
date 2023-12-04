package hashmap

func ContainsDuplicate(nums []int) bool {
	hashMap := map[int]int{}
	for _, v := range nums {
		if _, ok := hashMap[v]; ok {
			return true
		}

		hashMap[v] = 1
	}
	return false
}
