package transform

import "strings"

var (
	singles = []string{
		"",
		"One",
		"Two",
		"Three",
		"Four",
		"Five",
		"Six",
		"Seven",
		"Eight",
		"Nine",
	}

	teens = []string{
		"Ten",
		"Eleven",
		"Twelve",
		"Thirteen",
		"Fourteen",
		"Fifteen",
		"Sixteen",
		"Seventeen",
		"Eighteen",
		"Nineteen",
	}

	tens = []string{
		"",
		"Ten",
		"Twenty",
		"Thirty",
		"Forty",
		"Fifty",
		"Sixty",
		"Seventy",
		"Eighty",
		"Ninety",
	}
	thousands = []string{
		"", "Thousand", "Million", "Billion",
	}
)

func NumberToWords(num int) string {
	if num == 0 {
		return "Zero"
	}

	res := &strings.Builder{}
	toEnglish := func(num int) {
		if num >= 100 {
			res.WriteString(singles[num/100])
			res.WriteString(" Hundred ")
			num %= 100
		}

		if num >= 20 {
			res.WriteString(tens[num/10])
			res.WriteByte(' ')
			num %= 10
		}

		if num >= 10 {
			res.WriteString(teens[num-10])
			res.WriteByte(' ')
		} else if num > 0 && num < 10 {
			res.WriteString(singles[num])
			res.WriteByte(' ')
		}
	}

	for i, unit := 3, int(1e9); i >= 0; i-- {
		if curNum := num / unit; curNum > 0 {
			num -= curNum * unit
			toEnglish(curNum)
			res.WriteString(thousands[i])
			res.WriteByte(' ')
		}
		unit /= 1000
	}

	return strings.TrimSpace(res.String())
}
