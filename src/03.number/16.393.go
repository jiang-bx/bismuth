package number_bit

const MASK1 int = 0b10000000
const MASK2 int = 0b11000000

func getBytes(num int) int {
	if (num & MASK1) == 0 {
		return 1
	}

	n, mask := 0, MASK1
	for (mask & num) != 0 {
		n++
		if n > 4 {
			return -1
		}
		mask >>= 1
	}

	if n >= 2 {
		return n
	}

	return -1
}

func ValidUtf8(data []int) bool {
	n, i := len(data), 0

	for i < n {
		count := getBytes(data[i])
		if count < 0 || i+count > n {
			return false
		}
		for k := 1; k < count; k++ {
			if (data[i+k] & MASK2) != MASK1 {
				return false
			}
		}
		i += count
	}

	return true
}
