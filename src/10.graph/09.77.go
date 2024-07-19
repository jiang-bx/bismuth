package graph

func Combine(n int, k int) [][]int {
	var backtrack func(r int)
	ans := [][]int{}
	vals := []int{}
	backtrack = func(r int) {
		if len(vals) == k {
			ans = append(ans, append([]int{}, vals...))
			return
		}

		// for i := r; i <= n; i++ {

		// 剪枝条件
		for i := r; i <= n-(k-len(vals))+1; i++ {
			vals = append(vals, i)
			backtrack(i + 1)
			vals = vals[:len(vals)-1]
		}
	}

	backtrack(1)

	return ans
}
