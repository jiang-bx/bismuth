package hashmap

func ContainsNearbyAlmostDuplicate(nums []int, indexDiff int, valueDiff int) bool {
	bucket := map[int64]int64{}
	bucketSize := int64(valueDiff + 1)
	getIdx := func(c int64) int64 {
		if c >= 0 {
			return c / bucketSize
		} else {
			return ((c + 1) / bucketSize) - 1
		}
	}

	for i, v := range nums {
		c := int64(v)
		idx := getIdx(c)

		if _, ok := bucket[idx]; ok {
			return true
		}

		l, r := idx-1, idx+1

		if lVal, ok := bucket[l]; ok && c-lVal <= int64(valueDiff) {
			return true
		}

		if rVal, ok := bucket[r]; ok && rVal-c <= int64(valueDiff) {
			return true
		}

		bucket[idx] = c

		if i >= indexDiff {
			delete(bucket, getIdx(int64(nums[i-indexDiff])))
		}

	}

	return false
}
