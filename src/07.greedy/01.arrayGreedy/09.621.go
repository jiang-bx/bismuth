package array_greedy

import "sort"

func LeastInterval(tasks []byte, n int) int {
	buckets := make([]int, 26)
	for _, v := range tasks {
		buckets[v-'A']++
	}

	sort.Ints(buckets)

	maxTimes := buckets[25]
	maxCount := 1

	for i := 25; i >= 1; i-- {
		if buckets[i] == buckets[i-1] {
			maxCount++
		} else {
			break
		}
	}

	res := (maxTimes-1)*(n+1) + maxCount

	if res > len(tasks) {
		return res
	}

	return len(tasks)
}
