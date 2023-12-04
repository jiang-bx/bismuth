package array_two_each

func GenerateMatrix(n int) [][]int {
	top := 0
	bottom := n - 1
	left := 0
	right := n - 1
	k := 1

	res := make([][]int, n)
	for i := range res {
		res[i] = make([]int, n)
	}

	for {
		for i := left; i <= right; i++ {
			res[top][i] = k
			k++
		}
		top++
		if top > bottom {
			break
		}

		for i := top; i <= bottom; i++ {
			res[i][right] = k
			k++
		}
		right--
		if right < left {
			break
		}

		for i := right; i >= left; i-- {
			res[bottom][i] = k
			k++
		}
		bottom--
		if bottom < top {
			break
		}

		for i := bottom; i >= top; i-- {
			res[i][left] = k
			k++
		}
		left++
		if left > right {
			break
		}
	}

	return res
}
