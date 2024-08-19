package graph

func PacificAtlantic(heights [][]int) [][]int {
	m := len(heights)
	n := len(heights[0])
	ans := [][]int{}
	po := make([][]int, m)
	ao := make([][]int, m)
	for i := range po {
		po[i] = make([]int, n)
		ao[i] = make([]int, n)
	}

	var dfs func(r, c int, oo [][]int)

	dfs = func(r, c int, oo [][]int) {
		if oo[r][c] == 1 {
			return
		}
		oo[r][c] = 1

		if r-1 >= 0 && heights[r-1][c] >= heights[r][c] {
			dfs(r-1, c, oo)
		}

		if r+1 < m && heights[r+1][c] >= heights[r][c] {
			dfs(r+1, c, oo)
		}

		if c-1 >= 0 && heights[r][c-1] >= heights[r][c] {
			dfs(r, c-1, oo)
		}

		if c+1 < n && heights[r][c+1] >= heights[r][c] {
			dfs(r, c+1, oo)
		}
	}

	// 左右两边
	for i := 0; i < m; i++ {
		dfs(i, 0, po)
		dfs(i, n-1, ao)
	}

	// 上下两边
	for j := 0; j < n; j++ {
		dfs(0, j, po)
		dfs(m-1, j, ao)
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if po[i][j] == 1 && ao[i][j] == 1 {
				ans = append(ans, []int{i, j})
			}
		}
	}

	return ans
}
