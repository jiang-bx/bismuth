package graph

func MaxAreaOfIsland1(grid [][]int) int {
	m := len(grid)
	n := len(grid[0])
	ans := 0
	var dfs func(r, c int) int

	dfs = func(r, c int) int {
		if r < 0 || r >= m || c < 0 || c >= n {
			return 0
		}
		if grid[r][c] == 1 {
			grid[r][c] = 2
			return 1 + dfs(r-1, c) + dfs(r+1, c) + dfs(r, c-1) + dfs(r, c+1)
		}
		return 0
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == 1 {
				val := dfs(i, j)
				if ans < val {
					ans = val
				}
			}
		}
	}

	return ans
}

func MaxAreaOfIsland(grid [][]int) int {
	m := len(grid)
	n := len(grid[0])
	ans := 0

	bfs := func(i, j int) int {
		stack := [][]int{{i, j}}
		res := 0

		for len(stack) > 0 {
			cur := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			r, c := cur[0], cur[1]

			if r < 0 || r >= m || c < 0 || c >= n {
				continue
			}

			if grid[r][c] == 1 {
				grid[r][c] = 2
				res++
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
				val := bfs(i, j)
				if ans < val {
					ans = val
				}
			}
		}
	}

	return ans
}
