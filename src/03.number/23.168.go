package number_bit

func ConvertToTitle(columnNumber int) string {
	res := ""
	for columnNumber != 0 {
		columnNumber--
		res = string(byte(columnNumber%26+65)) + res
		columnNumber /= 26
	}
	return res
}
