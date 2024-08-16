package graph

func UpdateMatrix(mat [][]int) [][]int {
	m := len(mat)
	n := len(mat[0])
	ans := make([][]int, m)
	visited := make([][]bool, m)
	queue := [][]int{}

	for i := range ans {
		ans[i] = make([]int, n)
		visited[i] = make([]bool, n)
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if mat[i][j] == 0 {
				ans[i][j] = 0
				visited[i][j] = true
				queue = append(queue, []int{i, j})
			}
		}
	}

	// 搜索 0 到 1 的距离
	direction := [][]int{
		{-1, 0},
		{1, 0},
		{0, -1},
		{0, 1},
	}

	for len(queue) > 0 {
		cur := queue[0]
		queue = queue[1:]
		i, j := cur[0], cur[1]

		// 找 1
		for k := 0; k < 4; k++ {
			r, c := direction[k][0]+i, direction[k][1]+j
			if r < 0 || r >= m || c < 0 || c >= n {
				continue
			}

			// 未访问过的肯定是 1
			if !visited[r][c] {
				// 记录距离最近的 0 的位置
				ans[r][c] = ans[i][j] + 1
				visited[r][c] = true
				queue = append(queue, []int{r, c})
			}

		}
	}

	return ans
}
