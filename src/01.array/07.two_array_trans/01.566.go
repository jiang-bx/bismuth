package ArrayTwoTransform

func MatrixReshape(mat [][]int, r int, c int) [][]int {
	m := len(mat)
	n := len(mat[0])

	if m*n != r*c {
		return mat
	}

	l := 0
	k := 0
	res := [][]int{}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if k >= c {
				k = 0
				l++
			}

			if k == 0 {
				res = append(res, []int{})
			}

			res[l] = append(res[l], mat[i][j])
			k++
		}
	}

	return res
}
