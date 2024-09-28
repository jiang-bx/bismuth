package array_greedy

func SearchMatrixII(matrix [][]int, target int) bool {
	m := len(matrix)
	n := len(matrix[0])

	i := 0
	j := n - 1

	for i < m && j >= 0 {
		val := matrix[i][j]
		if target == val {
			return true
		}

		if target > val {
			i++
		} else {
			j--
		}
	}

	return false
}
