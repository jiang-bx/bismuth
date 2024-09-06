package array_greedy

func ArrangeCoins1(n int) int {
	k := 1
	for n > k {
		n -= k
		k++
	}
	if n != k {
		k--
	}
	return k
}

func ArrangeCoins(n int) int {
	l := 1
	r := n

	for l < r {
		mid := l + (r-l+1)/2
		if mid*(mid+1) <= n*2 {
			l = mid
		} else {
			r = mid - 1
		}
	}

	return l
}
