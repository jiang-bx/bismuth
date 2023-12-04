package count

func FindTheDifference(s string, t string) byte {
	res := 0

	for _, v := range s {
		res ^= int(v)
	}

	for _, v := range t {
		res ^= int(v)
	}

	return byte(res)
}
