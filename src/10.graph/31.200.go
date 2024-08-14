package graph

func NumIslands1(grid [][]byte) int {
	m := len(grid)
	n := len(grid[0])
	ans := 0
	var dfs func(i, j int)
	dfs = func(i, j int) {
		if i < 0 || i >= m || j < 0 || j >= n {
			return
		}

		if grid[i][j] == '1' {
			// 表示遍历过了
			grid[i][j] = '2'
			dfs(i-1, j)
			dfs(i+1, j)
			dfs(i, j-1)
			dfs(i, j+1)
			return
		}
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == '1' {
				ans++
				dfs(i, j)
			}
		}
	}

	return ans
}

// NumIslands  BFS 搜索
//
//	@param grid
//	@return int
func NumIslands(grid [][]byte) int {
	m := len(grid)
	n := len(grid[0])
	ans := 0

	bfs := func(i, j int) {
		stack := [][]int{{i, j}}

		for len(stack) > 0 {
			cur := stack[len(stack)-1]
			stack = stack[:len(stack)-1]

			r, c := cur[0], cur[1]

			if r < 0 || r >= m || c < 0 || c >= n {
				continue
			}

			if grid[r][c] != '1' {
				continue
			}

			grid[r][c] = '2'
			stack = append(stack, [][]int{
				{r - 1, c},
				{r + 1, c},
				{r, c - 1},
				{r, c + 1},
			}...)
		}
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == '1' {
				ans++
				bfs(i, j)
			}
		}
	}

	return ans
}
