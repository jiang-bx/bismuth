package ArrayTwoTransform

func GameOfLife(board [][]int) {
	m := len(board)
	n := len(board[0])
	neighbors := []int{0, 1, -1}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			liveNum := 0

			for l := 0; l < 3; l++ {
				for k := 0; k < 3; k++ {
					if neighbors[l] == 0 && neighbors[k] == 0 {
						continue
					}

					r := i + neighbors[l]
					c := j + neighbors[k]

					if r >= 0 && r < m && c >= 0 && c < n && (board[r][c] == 1 || board[r][c] == -1) {
						liveNum++
					}
				}
			}

			if board[i][j] == 1 && (liveNum < 2 || liveNum > 3) {
				board[i][j] = -1
			}

			if board[i][j] == 0 && liveNum == 3 {
				board[i][j] = 2
			}
		}
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if board[i][j] == -1 {
				board[i][j] = 0
			} else if board[i][j] == 2 {
				board[i][j] = 1
			}
		}
	}
}
