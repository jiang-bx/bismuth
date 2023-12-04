package number_bit

func MaximumSwap(num int) int {
	var list []int
	for num != 0 {
		list = append(list, num%10)
		num /= 10
	}

	ans := 0
	n := len(list)
	idx := make([]int, n)
	for i, j := 0, 0; i < n; i++ {
		if list[i] > list[j] {
			j = i
		}
		idx[i] = j
	}

	for i := n - 1; i >= 0; i-- {
		if list[idx[i]] != list[i] {
			c := list[idx[i]]
			list[idx[i]] = list[i]
			list[i] = c
			break
		}
	}

	for i := n - 1; i >= 0; i-- {
		ans = ans*10 + list[i]
	}

	return ans
}
