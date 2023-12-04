package count

func CanConstruct(ransomNote string, magazine string) bool {
	arr := make([]int, 26)

	for _, v := range magazine {
		arr[v-'a']++
	}

	for _, v := range ransomNote {
		if arr[v-'a'] <= 0 {
			return false
		} else {
			arr[v-'a']--
		}
	}

	return true
}
