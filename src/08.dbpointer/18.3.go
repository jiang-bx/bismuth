package dbpointer

func LengthOfLongestSubstring(s string) int {
	hashMap := map[rune]int{}
	res := 0
	i := -1

	for j, v := range s {
		if k, ok := hashMap[v]; ok && i < k {
			i = k
		}
		hashMap[v] = j
		if res < j-i {
			res = j - i
		}
	}

	return res
}
