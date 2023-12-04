package ArrayTwoTransform

func SetZeroes(matrix [][]int) {
	m := len(matrix)
	n := len(matrix[0])

	hasRowZero := false
	hasColZero := false

	for j := 0; j < n; j++ {
		if matrix[0][j] == 0 {
			hasRowZero = true
		}
	}

	for i := 0; i < m; i++ {
		if matrix[i][0] == 0 {
			hasColZero = true
		}
	}

	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			if matrix[i][j] == 0 {
				matrix[0][j] = 0
				matrix[i][0] = 0
			}
		}
	}

	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			if matrix[0][j] == 0 || matrix[i][0] == 0 {
				matrix[i][j] = 0
			}
		}
	}

	if hasRowZero {
		for j := 0; j < n; j++ {
			matrix[0][j] = 0
		}
	}

	if hasColZero {
		for i := 0; i < m; i++ {
			matrix[i][0] = 0
		}
	}
}
