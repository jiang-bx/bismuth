package count

func GroupAnagrams(strs []string) [][]string {
	mp := make(map[[26]int][]string)

	for _, str := range strs {
		arr := [26]int{}
		for _, s := range str {
			arr[s-'a']++
		}

		mp[arr] = append(mp[arr], str)
	}

	res := make([][]string, 0, len(mp))
	for _, v := range mp {
		res = append(res, v)
	}

	return res
}
