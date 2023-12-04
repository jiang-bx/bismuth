package transform

func IntToRoman(num int) string {
	nums := []int{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1}
	values := []string{
		"M",
		"CM",
		"D",
		"CD",
		"C",
		"XC",
		"L",
		"XL",
		"X",
		"IX",
		"V",
		"IV",
		"I",
	}

	res := ""

	for i, v := range nums {
		for num >= v {
			num -= v
			res += values[i]
		}
		if num == 0 {
			break
		}
	}

	return res
}
