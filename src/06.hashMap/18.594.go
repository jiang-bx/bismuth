package hashmap

import "sort"

func max(a, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
}

func FindLHS(nums []int) int {

	// 利用 map 统计
	numsMap, ans := map[int]int{}, 0

	for _, v := range nums {
		if m, ok := numsMap[v]; ok {
			numsMap[v] = m + 1
		} else {
			numsMap[v] = 1
		}
	}

	for k, v := range numsMap {
		if m, ok := numsMap[k-1]; ok {
			ans = max(ans, v+m)
		}
	}

	return ans
}

func FindLHS1(nums []int) int {
	sort.Slice(nums, func(i, j int) bool {
		return nums[i]-nums[j] <= 0
	})

	ans, n := 0, len(nums)

	for i, j := 0, 0; j < n; j++ {
		for i < j && nums[j]-nums[i] > 1 {
			i++
		}

		if nums[j]-nums[i] == 1 {
			ans = max(ans, j-i+1)
		}
	}

	return ans

}
