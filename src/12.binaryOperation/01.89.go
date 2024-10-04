package binary_operation

func GrayCode(n int) []int {
	ans := []int{0}
	head := 1
	for i := 0; i < n; i++ {
		res := append([]int{}, ans...)
		for j := len(res) - 1; j >= 0; j-- {
			ans = append(ans, head+res[j])
		}
		head <<= 1
	}
	return ans
}
