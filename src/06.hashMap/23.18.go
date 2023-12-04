package hashmap

import (
	"sort"
)

func FourSum(nums []int, target int) [][]int {
	ans, n := [][]int{}, len(nums)

	if n < 4 {
		return ans
	}

	// 排序
	sort.Ints(nums)

	for k := 0; k < n-3; k++ {
		if k > 0 && nums[k] == nums[k-1] {
			continue
		}

		minK := nums[k] + nums[k+1] + nums[k+2] + nums[k+3]
		if minK > target {
			break
		}

		maxK := nums[k] + nums[n-1] + nums[n-2] + nums[n-3]
		if maxK < target {
			continue
		}

		for i := k + 1; i < n-2; i++ {
			if i > k+1 && nums[i] == nums[i-1] {
				continue
			}
			j := i + 1
			h := n - 1

			minI := nums[k] + nums[i] + nums[j] + nums[j+1]
			if minI > target {
				break
			}

			maxI := nums[k] + nums[i] + nums[h] + nums[h-1]
			if maxI < target {
				continue
			}

			for j < h {
				cur := nums[k] + nums[i] + nums[j] + nums[h]
				if cur == target {
					ans = append(ans, []int{nums[k], nums[i], nums[j], nums[h]})

					j++
					for j < h && nums[j] == nums[j-1] {
						j++
					}

					h--
					for j < h && nums[h] == nums[h+1] {
						h--
					}
				} else if cur > target {
					h--
				} else {
					j++
				}
			}
		}
	}

	return ans
}
