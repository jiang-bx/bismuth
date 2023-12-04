package number_bit

func ToHex(num int) string {
	if num == 0 {
		return "0"
	}
	str := "0123456789abcdef"
	res := ""
	for num != 0 && len(res) < 8 {
		res = string(str[num&0b1111]) + res
		num >>= 4
	}
	return res
}
