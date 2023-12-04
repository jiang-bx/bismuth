package hashmap

func IsIsomorphic(s string, t string) bool {
	// tMap, sMap := map[byte]int{}, map[byte]int{}
	// for i := range s {
	// 	if _, ok := sMap[s[i]]; !ok {
	// 		sMap[s[i]] = i
	// 	}

	// 	if _, ok := tMap[t[i]]; !ok {
	// 		tMap[t[i]] = i
	// 	}
	// }

	// for i := range s {
	// 	si, ti := sMap[s[i]], tMap[t[i]]
	// 	if si != ti {
	// 		return false
	// 	}

	// }
	// return true

	tMap, sMap := map[byte]int{}, map[byte]int{}
	for i := range s {
		if _, ok := sMap[s[i]]; !ok {
			sMap[s[i]] = i
		}

		if _, ok := tMap[t[i]]; !ok {
			tMap[t[i]] = i
		}

		si, ti := sMap[s[i]], tMap[t[i]]
		if si != ti {
			return false
		}
	}

	return true
}
