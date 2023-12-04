package hashmap

func LongestConsecutive(nums []int) int {
	hashMap := map[int]bool{}
	for _, v := range nums {
		hashMap[v] = true
	}

	longest := 0

	for k := range hashMap {
		if _, ok := hashMap[k-1]; !ok {
			curNum := k
			curLong := 1

			for hashMap[curNum+1] {
				curNum += 1
				curLong += 1
			}

			if longest < curLong {
				longest = curLong
			}
		}
	}

	return longest
}
