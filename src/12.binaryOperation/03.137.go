package binary_operation

func SingleNumber137_1(nums []int) int {
	ans := int32(0)
	for i := 0; i < 32; i++ {
		cnt1 := int32(0)
		for _, x := range nums {
			cnt1 += (int32(x) >> i) & 1
		}
		ans |= cnt1 % 3 << i
	}
	return int(ans)
}

func SingleNumber137_2(nums []int) int {
	a, b := 0, 0
	for _, x := range nums {
		a, b = (a^x)&(a|b), (b^x)&^a
	}
	return b
}

func SingleNumber137(nums []int) int {
	a, b := 0, 0
	for _, x := range nums {
		b = (b ^ x) & ^a
		a = (a ^ x) & ^b
	}
	return b
}
