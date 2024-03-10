package dbpointer

func Merge(nums1 []int, m int, nums2 []int, n int) {
	i := m + n - 1
	m--
	n--

	for n >= 0 {
		for m >= 0 && nums1[m] > nums2[n] {
			nums1[i] = nums1[m]
			i--
			m--
		}
		nums1[i] = nums2[n]
		i--
		n--
	}
}
