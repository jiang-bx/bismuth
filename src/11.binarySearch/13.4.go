package array_greedy

import (
	"math"
	"sort"
)

func FindMedianSortedArrays1(nums1 []int, nums2 []int) float64 {
	arr := append([]int{}, nums1...)
	arr = append(arr, nums2...)
	sort.Ints(arr)
	n := len(arr)

	if n%2 == 0 {
		mid := n / 2
		total := float64(arr[mid] + arr[mid-1])
		return total / 2
	}

	return float64(arr[n/2])
}

func FindMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	n1 := len(nums1)
	n2 := len(nums2)

	if n1 > n2 {
		return FindMedianSortedArrays(nums2, nums1)
	}

	k := (n1 + n2 + 1) / 2

	left := 0
	// n1 < n2, 二分长度小的数组
	right := n1

	for left < right {
		m1 := left + (right-left)/2
		m2 := k - m1

		if nums1[m1] < nums2[m2-1] {
			left = m1 + 1
		} else {
			right = m1
		}
	}

	m1 := left
	m2 := k - left

	min1 := math.MinInt
	min2 := math.MinInt
	if m1 > 0 {
		min1 = nums1[m1-1]
	}
	if m2 > 0 {
		min2 = nums2[m2-1]
	}
	c1 := min1
	if min2 > min1 {
		c1 = min2
	}
	if (n1+n2)%2 == 1 {
		return float64(c1)
	}

	max1 := math.MaxInt
	max2 := math.MaxInt
	if m1 < n1 {
		max1 = nums1[m1]
	}
	if m2 < n2 {
		max2 = nums2[m2]
	}

	c2 := max1
	if max1 > max2 {
		c2 = max2
	}

	return float64(c1+c2) / 2
}
