package number_bit

func TitleToNumber(columnTitle string) int {
	res := 0
	for _, v := range columnTitle {
		res = res*26 + int(v) - int('A'-1)
	}
	return res
}
