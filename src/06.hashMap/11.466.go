package hashmap

type hashMapItem struct {
	first  int
	second int
}

func GetMaxRepetitions(s1 string, n1 int, s2 string, n2 int) int {
	ans, len1, len2, index1, index2, hashMap := 0, len(s1), len(s2), 0, 0, make(map[int]hashMapItem)

	for (index1 / len1) < n1 {
		if index1%len1 == len1-1 {
			if val, ok := hashMap[index2%len2]; ok {
				cycleLen := index1 - val.first
				cycleNum2 := (index2 - val.second) / len2
				cycleNum1 := cycleLen / len1
				cycle := (n1 - 1 - index1/len1) / cycleNum1

				ans += cycle * cycleNum2
				index1 += cycle * cycleLen
			} else {
				hashMap[index2%len2] = hashMapItem{
					first:  index1,
					second: index2,
				}
			}
		}

		if s1[index1%len1] == s2[index2%len2] {
			if index2%len2 == len2-1 {
				ans++
			}
			index2++
		}
		index1++
	}

	return ans / n2
}
