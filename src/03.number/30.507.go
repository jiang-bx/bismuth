package number_bit

func CheckPerfectNumber(num int) bool {

	if num == 1 {
		return false
	}

	res := 1

	// for i := 2; i <= num/i; i++ {
	// 	if num%i == 0 {
	// 		res += i
	// 		if i*i != num {
	// 			res += num / i
	// 		}
	// 	}
	// }

	for i := 2; i*i < num; i++ {
		if num%i == 0 {
			res += i + num/i
		}
	}

	return res == num
}
