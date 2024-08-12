package c410

func countOfPairs(nums []int) int {
	ans := 0
	n := len(nums)
	arr1 := make([]int, n)
	arr2 := make([]int, n)

	var dfs func(start int, a1 int) bool
	dfs = func(start int, a1 int) bool {
		if start == n {
			ans++
			return true
		}

		a2 := nums[start] - a1

		// 判断 a1 是否单调
		if start > 0 && arr1[start-1] > a1 {
			return false
		}
		// 判断 a2 是否单调
		if start > 0 && arr2[start-1] < a2 {
			return false
		}

		arr1[start] = a1
		arr2[start] = a2

		if !dfs(start+1, a1+1) {
			arr1[start] = 0
			arr2[start] = 0
			return false
		}

		return true
	}

	dfs(0, 0)

	return ans
}
