package array_two_each

func FindDiagonalOrder(mat [][]int) []int {
	res := []int{}
	m := len(mat)
	n := len(mat[0])
	isUp := true

	for i := 0; i < n+m; i++ {
		pm := m
		if !isUp {
			pm = n
		}
		pn := n
		if !isUp {
			pn = m
		}

		x := i
		if i >= pm {
			x = pm - 1
		}
		y := i - x

		for x >= 0 && y < pn {
			if isUp {
				res = append(res, mat[x][y])
			} else {
				res = append(res, mat[y][x])
			}
			x--
			y++
		}

		isUp = !isUp
	}

	return res
}
