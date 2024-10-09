package binary_operation

func GetSum1(a int, b int) int {
	if b == 0 {
		return a
	}
	return GetSum1(a^b, (a&b)<<1)
}

func GetSum(a int, b int) int {
	ans := 0
	t := 0
	for i := 0; i < 32; i++ {
		u1 := (a >> i) & 1
		u2 := (b >> i) & 1

		if u1 == 1 && u2 == 1 {
			ans |= (t << i)
			t = 1
		} else if u1 == 1 || u2 == 1 {
			ans |= ((1 ^ t) << i)
		} else {
			ans |= (t << i)
			t = 0
		}
	}
	return ans
}
