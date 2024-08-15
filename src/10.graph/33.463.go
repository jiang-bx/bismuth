package graph

func IslandPerimeter1(grid [][]int) int {
	m := len(grid)
	n := len(grid[0])
	ans := 0

	var dfs func(r, c int) int

	dfs = func(r, c int) int {
		// 从岛屿到边界, 周长 + 1
		if r < 0 || r >= m || c < 0 || c >= n {
			return 1
		}

		// 到水域, 周长 + 1
		if grid[r][c] == 0 {
			return 1
		}

		// 为 2 时, 略过
		if grid[r][c] != 1 {
			return 0
		}

		grid[r][c] = 2

		return dfs(r-1, c) +
			dfs(r+1, c) +
			dfs(r, c-1) +
			dfs(r, c+1)

	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == 1 {
				return dfs(i, j)
			}
		}
	}

	return ans
}

func IslandPerimeter2(grid [][]int) int {
	m := len(grid)
	n := len(grid[0])
	land := 0
	// 与下一块土地接壤的土地数量
	border := 0

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == 1 {
				land++

				if i < m-1 && grid[i+1][j] == 1 {
					border++
				}

				if j < n-1 && grid[i][j+1] == 1 {
					border++
				}
			}
		}
	}

	return 4*land - 2*border
}

func IslandPerimeter(grid [][]int) int {
	m := len(grid)
	n := len(grid[0])

	bfs := func(i, j int) int {
		stack := [][]int{{i, j}}
		res := 0

		for len(stack) > 0 {
			cur := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			r, c := cur[0], cur[1]

			if r < 0 || r >= m || c < 0 || c >= n {
				res++
				continue
			}

			if grid[r][c] == 0 {
				res++
			}

			if grid[r][c] == 1 {
				grid[r][c] = 2

				stack = append(stack, []int{r - 1, c})
				stack = append(stack, []int{r + 1, c})
				stack = append(stack, []int{r, c - 1})
				stack = append(stack, []int{r, c + 1})
			}

		}

		return res
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == 1 {
				return bfs(i, j)
			}
		}
	}

	return 0
}
