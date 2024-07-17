package graph

func SolveSudoku1(board [][]byte) {
	var isValid func(row, col int, val byte) bool
	var backtrack func() bool

	isValid = func(row, col int, val byte) bool {
		for i := 0; i < 9; i++ {
			if board[row][i] == val {
				return false
			}
		}

		for j := 0; j < 9; j++ {
			if board[j][col] == val {
				return false
			}
		}

		startRow := (row / 3) * 3
		startCol := (col / 3) * 3
		for i := startRow; i < startRow+3; i++ {
			for j := startCol; j < startCol+3; j++ {
				if board[i][j] == val {
					return false
				}
			}
		}
		return true
	}

	backtrack = func() bool {
		for i := 0; i < 9; i++ {
			for j := 0; j < 9; j++ {
				if board[i][j] != '.' {
					continue
				}
				// 尝试填充 1 ~ 9
				for k := '1'; k <= '9'; k++ {
					if isValid(i, j, byte(k)) {
						board[i][j] = byte(k)

						if backtrack() {
							return true
						}

						board[i][j] = '.'
					}
				}

				// 1 ~ 9 填充完毕, 都不符合, 返回 false
				return false
			}
		}

		return true
	}

	backtrack()
}

func SolveSudoku(board [][]byte) {
	var backtrack func(row, col int) bool

	rowUsed := make([][]bool, 9)
	colUsed := make([][]bool, 9)
	boxUsed := make([][][]bool, 3)

	for i := 0; i < 9; i++ {
		rowUsed[i] = make([]bool, 10)
		colUsed[i] = make([]bool, 10)
	}

	for i := 0; i < 3; i++ {
		boxUsed[i] = make([][]bool, 3)
		for j := 0; j < 3; j++ {
			boxUsed[i][j] = make([]bool, 10)
		}
	}

	for i := 0; i < 9; i++ {
		for j := 0; j < 9; j++ {
			if board[i][j] == '.' {
				continue
			}
			num := int(board[i][j] - '0')
			rowUsed[i][num] = true
			colUsed[j][num] = true
			boxUsed[i/3][j/3][num] = true
		}
	}

	backtrack = func(row, col int) bool {
		if col == 9 {
			col = 0
			row++
			if row == 9 {
				return true
			}
		}

		if board[row][col] != '.' {
			return backtrack(row, col+1)
		}

		for k := 1; k <= 9; k++ {
			if rowUsed[row][k] || colUsed[col][k] || boxUsed[row/3][col/3][k] {
				continue
			}

			rowUsed[row][k] = true
			colUsed[col][k] = true
			boxUsed[row/3][col/3][k] = true
			board[row][col] = byte(k) + '0'

			if backtrack(row, col+1) {
				return true
			}

			rowUsed[row][k] = false
			colUsed[col][k] = false
			boxUsed[row/3][col/3][k] = false
			board[row][col] = '.'
		}

		return false
	}

	backtrack(0, 0)
}
