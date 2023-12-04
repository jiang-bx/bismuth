package hashmap

func TwoSum1(nums []int, target int) []int {
	hashMap := make(map[int]int)

	for i, v := range nums {
		diff := target - v
		if val, ok := hashMap[diff]; ok {
			return []int{val, i}
		}
		hashMap[v] = i
	}

	return []int{}
}
