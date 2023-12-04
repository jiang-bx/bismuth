package precisionoperation

func bigAdd(num1 string, num2 string) string {
	i, j, c, res := len(num1)-1, len(num2)-1, 0, []byte{}

	for i >= 0 || j >= 0 || c != 0 {
		t1, t2 := 0, 0
		if i >= 0 {
			t1 = int(num1[i] - '0')
		}
		if j >= 0 {
			t2 = int(num2[j] - '0')
		}

		total := t1 + t2 + c

		if total >= 10 {
			c = 1
		} else {
			c = 0
		}

		total %= 10

		res = append(res, byte(total+'0'))

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

func isValid(num []byte, i int, j int, k int) bool {
	if num[i] == '0' && j != i+1 {
		return false
	}
	if num[j] == '0' && k != j+1 {
		return false
	}

	n := len(num)
	num1 := num[i:j]
	num2 := num[j:k]
	sum := bigAdd(string(num1), string(num2))
	sumLen := len(sum)
	last := k + sumLen

	if last > n {
		return false
	}

	// 判断结果与源串是否相等
	numSum := num[k:last]
	if string(numSum) != sum {
		return false
	}

	if last == n {
		return true
	}

	return isValid(num, j, k, last)
}

func IsAdditiveNumber(num string) bool {
	n := len(num)

	if n < 3 {
		return false
	}

	str := []byte(num)

	for i := 1; i < n; i++ {
		for j := i + 1; j < n; j++ {
			if isValid(str, 0, i, j) {
				return true
			}
		}
	}

	return false
}
