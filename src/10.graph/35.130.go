package graph

func Solve1(board [][]byte) {
	m := len(board)
	n := len(board[0])

	bfs := func(i, j int) {
		queue := [][]int{{i, j}}

		for len(queue) > 0 {
			cur := queue[0]
			queue = queue[1:]
			r, c := cur[0], cur[1]

			if r < 0 || r >= m || c < 0 || c >= n {
				continue
			}

			// 从边界开始找到 O, 并与其联通的 O 修改为 *
			if board[r][c] == 'X' || board[r][c] == '*' {
				continue
			}

			board[r][c] = '*'

			queue = append(queue, []int{r - 1, c})
			queue = append(queue, []int{r + 1, c})
			queue = append(queue, []int{r, c - 1})
			queue = append(queue, []int{r, c + 1})
		}
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			// 从边界中开始找
			if board[i][j] == 'O' && (i == 0 || j == 0 || i == m-1 || j == n-1) {
				bfs(i, j)
			}
		}
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			// 这时的 O 都是被包围的, 可以被修改为 X 的
			if board[i][j] == 'O' {
				board[i][j] = 'X'
			}

			// * 表示与边界联通的 O, 需要恢复现场
			if board[i][j] == '*' {
				board[i][j] = 'O'
			}
		}
	}
}

func Solve(board [][]byte) {
	m := len(board)
	n := len(board[0])
	var dfs func(r, c int)

	dfs = func(r, c int) {
		if r < 0 || r >= m || c < 0 || c >= n {
			return
		}

		if board[r][c] == 'X' || board[r][c] == '*' {
			return
		}

		board[r][c] = '*'

		dfs(r-1, c)
		dfs(r+1, c)
		dfs(r, c-1)
		dfs(r, c+1)
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			// 从边界中开始找
			if board[i][j] == 'O' && (i == 0 || j == 0 || i == m-1 || j == n-1) {
				dfs(i, j)
			}
		}
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			// 这时的 O 都是被包围的, 可以被修改为 X 的
			if board[i][j] == 'O' {
				board[i][j] = 'X'
			}

			// * 表示与边界联通的 O, 需要恢复现场
			if board[i][j] == '*' {
				board[i][j] = 'O'
			}
		}
	}
}
