package precisionoperation

func Multiply(num1, num2 string) string {
	if num1 == "0" || num2 == "0" {
		return "0"
	}

	m, n := len(num1), len(num2)
	arr := make([]int, m+n)

	for i := m - 1; i >= 0; i-- {
		for j := n - 1; j >= 0; j-- {
			lowPos := i + j + 1
			mul := int(num1[i]-'0') * int(num2[j]-'0')
			sum := arr[lowPos] + mul
			arr[lowPos] = sum % 10
			arr[lowPos-1] += sum / 10
		}
	}

	res, i := []byte{}, 0
	if arr[0] == 0 {
		i = 1
	}

	for ; i < len(arr); i++ {
		res = append(res, byte(arr[i]+'0'))
	}

	return string(res)
}
