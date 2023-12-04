package array_two_each

func SpiralOrder(matrix [][]int) []int {
	matrixLen := len(matrix)
	arr := []int{}

	if matrixLen == 0 {
		return []int{}
	}

	top := 0
	bottom := matrixLen - 1
	left := 0
	right := len(matrix[0]) - 1

	for {
		for i := left; i <= right; i++ {
			arr = append(arr, matrix[top][i])
		}
		top++
		if top > bottom {
			break
		}

		for i := top; i <= bottom; i++ {
			arr = append(arr, matrix[i][right])
		}
		right--
		if right < left {
			break
		}

		for i := right; i >= left; i-- {
			arr = append(arr, matrix[bottom][i])
		}
		bottom--
		if bottom < top {
			break
		}

		for i := bottom; i >= top; i-- {
			arr = append(arr, matrix[i][left])
		}
		left++
		if left > right {
			break
		}
	}

	return arr
}
