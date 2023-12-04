package arraydp

func Fib(n int) int {
	if n == 0 {
		return 0
	}

	prev, cur := 1, 1
	for i := 3; i <= n; i++ {
		sum := prev + cur
		prev = cur
		cur = sum
	}

	return cur
}
