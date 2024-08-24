package graph

import (
	"sort"
)

func CutOffTree(forest [][]int) int {
	m := len(forest)
	n := len(forest[0])
	dirs := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}

	list := [][]int{}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if forest[i][j] > 1 {
				list = append(list, []int{forest[i][j], i, j})
			}
		}
	}

	sort.Slice(list, func(i, j int) bool {
		return list[i][0] < list[j][0]
	})

	startX, startY, ans := 0, 0, 0

	bfs := func(sX, sY, nX, nY int) int {

		used := make(map[int]bool)

		used[sX*n+sY] = true

		queue := [][]int{{sX, sY}}

		step := 0

		for len(queue) > 0 {
			size := len(queue)

			for i := 0; i < size; i++ {
				cur := queue[0]
				queue = queue[1:]
				r, c := cur[0], cur[1]

				if r == nX && c == nY {
					return step
				}

				for _, d := range dirs {
					nR := r + d[0]
					nC := c + d[1]

					if nR < 0 || nR >= m || nC < 0 || nC >= n || forest[nR][nC] == 0 {
						continue
					}

					if !used[nR*n+nC] {
						queue = append(queue, []int{nR, nC})
						used[nR*n+nC] = true
					}
				}
			}

			step++
		}

		return -1
	}

	for i := 0; i < len(list); i++ {
		nextX, nextY := list[i][1], list[i][2]

		d := bfs(startX, startY, nextX, nextY)

		if d == -1 {
			return -1
		}

		ans += d

		startX = nextX
		startY = nextY
	}

	return ans
}
