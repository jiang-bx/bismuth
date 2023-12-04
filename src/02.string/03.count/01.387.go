package count

func FirstUniqChar(s string) int {
	arr := make([]int, 26)

	for _, v := range s {
		arr[v-'a']++
	}

	for i, v := range s {
		if arr[v-'a'] == 1 {
			return i
		}
	}

	return -1
}
