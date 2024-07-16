package graph

func IsValidSudoku1(board [][]byte) bool {
	row := make(map[byte]bool, 9)
	col := make(map[byte]bool, 9)
	box := make([]map[byte]bool, 9)

	for i := 0; i < 9; i++ {
		for j := 0; j < 9; j++ {
			rowVal := board[i][j]
			colVal := board[j][i]
			boxIndex := (i/3)*3 + j/3

			if box[boxIndex] == nil {
				box[boxIndex] = make(map[byte]bool, 9)
			}

			curBox := box[boxIndex]

			if row[rowVal] || col[colVal] || curBox[rowVal] {
				return false
			}

			if rowVal != '.' {
				row[rowVal] = true
				curBox[rowVal] = true
			}

			if colVal != '.' {
				col[colVal] = true
			}
		}

		col = make(map[byte]bool)
		row = make(map[byte]bool)
	}

	return true
}

func IsValidSudoku(board [][]byte) bool {
	row := make(map[byte]bool, 9)
	col := make(map[byte]bool, 9)

	for i := 0; i < 9; i++ {
		for j := 0; j < 9; j++ {
			rowVal := board[i][j]
			colVal := board[j][i]

			if row[rowVal] || col[colVal] {
				return false
			}

			if rowVal != '.' {
				row[rowVal] = true
			}

			if colVal != '.' {
				col[colVal] = true
			}
		}

		col = make(map[byte]bool)
		row = make(map[byte]bool)
	}

	row = make(map[byte]bool)

	for i := 0; i < 9; i += 3 {
		for j := 0; j < 9; j += 3 {
			for l := i; l < i+3; l++ {
				for k := j; k < j+3; k++ {
					if row[board[l][k]] {
						return false
					}
					if board[l][k] != '.' {
						row[board[l][k]] = true
					}
				}
			}
			row = make(map[byte]bool)
		}
	}

	return true
}
