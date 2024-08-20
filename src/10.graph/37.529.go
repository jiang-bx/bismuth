package graph

func UpdateBoard(board [][]byte, click []int) [][]byte {
	// 点击地雷, 结束游戏
	r, c := click[0], click[1]

	if board[r][c] == 'M' {
		board[r][c] = 'X'
		return board
	}

	m := len(board)
	n := len(board[0])
	dr := [][]int{
		{-1, -1},
		{-1, 0},
		{-1, 1},
		{0, 1},
		{1, 1},
		{1, 0},
		{1, -1},
		{0, -1},
	}

	var dfs func(i, j int)
	dfs = func(i, j int) {
		count := 0
		for _, v := range dr {
			x := v[0] + i
			y := v[1] + j

			if x < 0 || x >= m || y < 0 || y >= n {
				continue
			}

			if board[x][y] == 'M' {
				count++
			}
		}

		if count > 0 {
			board[i][j] = byte(count) + '0'
			return
		}

		// 周围没有雷
		board[i][j] = 'B'
		for _, v := range dr {
			x := v[0] + i
			y := v[1] + j

			if x < 0 || x >= m || y < 0 || y >= n {
				continue
			}

			if board[x][y] != 'E' {
				continue
			}

			dfs(x, y)
		}
	}

	dfs(r, c)

	return board
}
