package binary_operation

func SingleNumber260(nums []int) []int {
	xor := 0
	for _, v := range nums {
		xor ^= v
	}

	lowBit := xor & -xor

	ans := make([]int, 2)

	for _, v := range nums {
		if v&lowBit == 0 {
			ans[0] ^= v
		} else {
			ans[1] ^= v
		}
	}

	return ans
}
