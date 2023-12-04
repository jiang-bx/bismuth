package array_greedy

import "sort"

func ReconstructQueue(people [][]int) [][]int {
	// 排序
	sort.Slice(people, func(i, j int) bool {
		a := people[i]
		b := people[j]

		// 如果身高相同, 按照 k 小到大排序
		if a[0] == b[0] {
			return a[1] < b[1]
		}

		// 默认按照 身高从大到小排序
		return a[0] > b[0]
	})

	for i, v := range people {
		// copy(dest, src) 将 src 复制到 dest
		copy(people[v[1]+1:i+1], people[v[1]:i+1])
		people[v[1]] = v
	}

	return people
}
