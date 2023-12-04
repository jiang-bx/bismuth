package precisionoperation

func AddBinary(a, b string) string {
	i, j, carry, res := len(a)-1, len(b)-1, 0, []byte{}

	for i >= 0 || j >= 0 || carry != 0 {
		curNumA, curNumB := 0, 0
		if i >= 0 {
			curNumA = int(a[i] - '0')
		}

		if j >= 0 {
			curNumB = int(b[j] - '0')
		}

		total := curNumA + curNumB + carry
		if total >= 2 {
			carry = 1
		} else {
			carry = 0
		}

		total %= 2

		res = append(res, byte(total+'0'))

		i--
		j--
	}

	for k, l := 0, len(res)-1; k < l; {
		res[k], res[l] = res[l], res[k]
		k++
		l--
	}

	return string(res)
}
