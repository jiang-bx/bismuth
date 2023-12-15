package array_greedy

func StrongPasswordChecker(password string) int {
	n := len(password)
	A, B, C := 0, 0, 0

	for _, v := range password {
		if v >= 'a' && v <= 'z' {
			A = 1
		} else if v >= '0' && v <= '9' {
			B = 1
		} else if v >= 'A' && v <= 'Z' {
			C = 1
		}
	}

	m := A + B + C

	if n < 6 {
		return max(6-n, 3-m)
	} else if n <= 20 {
		tot := 0
		for i := 0; i < n; {
			j := i

			for j < n && password[i] == password[j] {
				j++
			}

			cnt := j - i
			if cnt >= 3 {
				tot += cnt / 3
			}
			i = j
		}

		return max(tot, 3-m)
	} else {
		tot := 0
		cnts := []int{0, 0, 0}
		for i := 0; i < n; {
			j := i
			for j < n && password[i] == password[j] {
				j++
			}

			cnt := j - i
			if cnt >= 3 {
				tot += cnt / 3
				cnts[cnt%3]++
			}
			i = j
		}

		base := n - 20
		cur := base

		for i := 0; i < 3; i++ {
			if i == 2 {

				cnts[i] = tot
			}

			if cnts[i] != 0 && cur != 0 {
				t := min(cnts[i]*(i+1), cur)
				cur -= t
				tot -= t / (i + 1)

			}
		}

		return base + max(tot, 3-m)
	}

}

func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}

	return b
}
