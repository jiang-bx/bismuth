package binary_operation

func SingleNumber260(nums []int) int {
	a, b := 0, 0
	for _, x := range nums {
		b = (b ^ x) & ^a
		a = (a ^ x) & ^b
	}
	return b
}
