package precisionoperation

func AddStrings(num1, num2 string) string {
	i, j, c, res := len(num1)-1, len(num2)-1, 0, []byte{}

	for i >= 0 || j >= 0 || c != 0 {
		curNum1, curNum2 := 0, 0
		if i >= 0 {
			curNum1 = int(num1[i] - '0')
		}

		if j >= 0 {
			curNum2 = int(num2[j] - '0')
		}

		t := curNum1 + curNum2 + c

		if t >= 10 {
			c = 1
		} else {
			c = 0
		}

		t %= 10

		res = append(res, byte(t+'0'))

		i--
		j--
	}

	i = 0
	j = len(res) - 1

	for i < j {
		res[i], res[j] = res[j], res[i]
		i++
		j--
	}

	return string(res)
}
