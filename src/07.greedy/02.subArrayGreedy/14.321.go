package sub_array_greedy

func MaxNumber(nums1 []int, nums2 []int, k int) []int {

	// 思路: 从 nums1 中选出 i 个
	// 从 nums2 中选出 k - i 个
	// 合并
	// 找到最大的
	res := []int{}

	for i := 0; i <= k && i <= len(nums1); i++ {
		if k-i >= 0 && k-i <= len(nums2) {
			temp := merge(subMaxNumber(nums1, i), subMaxNumber(nums2, k-i))

			if compare(temp, 0, res, 0) {
				res = temp
			}
		}
	}

	return res
}

func subMaxNumber(nums []int, n int) []int {
	subNums := make([]int, n)

	cur := 0
	rem := len(nums) - n

	for i := 0; i < len(nums); i++ {
		for cur > 0 && subNums[cur-1] < nums[i] && rem > 0 {
			cur--
			rem--
		}

		if cur < n {
			subNums[cur] = nums[i]
			cur++
		} else {
			rem--
		}
	}

	return subNums
}

func merge(nums1 []int, nums2 []int) []int {
	res := make([]int, len(nums1)+len(nums2))

	cur, p1, p2 := 0, 0, 0

	for cur < len(nums1)+len(nums2) {
		if compare(nums1, p1, nums2, p2) {
			res[cur] = nums1[p1]
			p1++
		} else {
			res[cur] = nums2[p2]
			p2++
		}
		cur++
	}

	return res
}

func compare(nums1 []int, p1 int, nums2 []int, p2 int) bool {
	if p2 >= len(nums2) {
		return true
	}

	if p1 >= len(nums1) {
		return false
	}

	if nums1[p1] > nums2[p2] {
		return true
	}

	if nums1[p1] < nums2[p2] {
		return false
	}

	return compare(nums1, p1+1, nums2, p2+1)
}
