package hashmap

func IsHappy(n int) bool {
	getNext := func(num int) int {
		sum := 0
		for num > 0 {
			digit := num % 10
			num = num / 10
			sum += digit * digit
		}
		return sum
	}

	hashMap := map[int]bool{}

	for n != 1 && !hashMap[n] {
		hashMap[n] = true
		n = getNext(n)
	}

	return n == 1
}
