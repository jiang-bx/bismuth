package binary_operation

func MissingNumber(nums []int) int {
	xor := len(nums)
	for i, v := range nums {
		xor ^= i
		xor ^= v
	}
	return xor
}
