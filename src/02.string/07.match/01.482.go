package match

func LicenseKeyFormatting(s string, k int) string {
	j, res := 0, []byte{}

	for i := len(s) - 1; i >= 0; i-- {
		if s[i] == '-' {
			continue
		}

		cur := s[i]

		if s[i] >= 96 {
			cur = s[i] - 32
		}

		if j < k {
			j++
		} else {
			j = 1
			res = append(res, '-')
		}
		res = append(res, cur)
	}

	for i, j := 0, len(res)-1; i < j; i, j = i+1, j-1 {
		res[i], res[j] = res[j], res[i]
	}

	return string(res)
}
