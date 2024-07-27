package graph

import (
	"strconv"
)

// GetPermutation1 回溯实现
//
//	@param n
//	@param k
//	@return string
func GetPermutation1(n int, k int) string {
	onPath := []int{}
	used := make([]bool, n+1)
	ans := ""

	var backtrack func() bool

	backtrack = func() bool {
		if len(onPath) == n {
			k--
			if k == 0 {
				for _, v := range onPath {
					s := strconv.Itoa(v)
					ans += s
				}
			}
			return k == 0
		}

		for i := 1; i <= n; i++ {
			if !used[i] {
				used[i] = true
				onPath = append(onPath, i)

				if backtrack() {
					return true
				}

				used[i] = false
				onPath = onPath[:len(onPath)-1]
			}
		}

		return false
	}

	backtrack()

	return ans
}

// GetPermutation 查找实现
//
//	@param n
//	@param k
//	@return string
func GetPermutation(n int, k int) string {
	// ! 1. 4 的阶乘 4! = 4 * 3 * 2 * 1 = 24
	// ! 2. 以每个数(1, 2, 3, 4)的开头的组, 有 24 / 4 = 6 个
	// ! 3. 以 k = 13 时为例, k > 12 跳过 1 和 2 的开头,
	// ! 4. 所以直接 通过 k / 6

	// 计算 n 的阶乘
	factorial := make([]int, n+1)
	factorial[0] = 1
	for i := 1; i <= n; i++ {
		factorial[i] = factorial[i-1] * i
	}

	// ! 刚开始需要 k--, 因为 k 能取到 0, 题目的 k 是从 1 开始计数的
	// [1, 2, 3, 4] ,
	// 有 24 种排列, k = 9 时,  k--    index = 8 / 6 = 1 => 选 2
	// [1, 3, 4]
	// 有 6 种排列, k = 8 - 1 * 6 = 2, index = 2 / 2 = 1 => 选 3
	// [1, 4]
	// 有 2 种排列, k = 2 - 1 * 2 = 0, index = 0 / 1 = 0 => 选 0
	// [4]
	// 有 1 种排列, k = 0 - 0 * 0 = 0, index = 0 / 1 = 0 => 选 0

	nums := []int{}
	for i := 0; i < n; i++ {
		nums = append(nums, i+1)
	}

	ans := ""
	k--
	for i := n; i > 0; i-- {
		// 有几组排列
		g := factorial[i] / i

		// 找到对应的 index, 就是需要的排列
		index := k / g
		ans += strconv.Itoa(nums[index])

		// 移除排列
		nums = append(nums[:index], nums[index+1:]...)

		// k 需要减去 每组加跳过的数量
		k -= g * index
	}

	return ans
}
