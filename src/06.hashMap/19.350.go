package hashmap

import (
	"sort"
)

func Intersect(nums1 []int, nums2 []int) []int {
	// m, ans := make(map[int]int), []int{}

	// for _, v := range nums1 {
	// 	m[v] += 1
	// }

	// for _, v := range nums2 {
	// 	if n, ok := m[v]; ok && n > 0 {
	// 		m[v] = n - 1
	// 		ans = append(ans, v)
	// 	}
	// }

	// return ans

	// 如果给定的数组已经排好序呢？你将如何优化你的算法？
	ans, l, r := []int{}, 0, 0

	sort.Ints(nums1)
	sort.Ints(nums2)

	for l < len(nums1) && r < len(nums2) {
		if nums1[l] < nums2[r] {
			l++
		} else if nums1[l] > nums2[r] {
			r++
		} else {
			ans = append(ans, nums1[l])
			l++
			r++
		}
	}

	return ans
}
