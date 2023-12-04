package arraySearch

type NumMatrix struct {
	sums [][]int
}

func ConstructorNumMatrix(matrix [][]int) NumMatrix {
	m := len(matrix)
	n := len(matrix[0])
	sums := [][]int{}
	sums = append(sums, make([]int, n+1))

	for i := 0; i < m; i++ {
		sums = append(sums, make([]int, n+1))
		for j := 0; j < n; j++ {
			sums[i+1][j+1] = sums[i+1][j] + sums[i][j+1] - sums[i][j] + matrix[i][j]
		}
	}

	return NumMatrix{
		sums: sums,
	}
}

func (n *NumMatrix) SumRegion(row1 int, col1 int, row2 int, col2 int) int {
	return n.sums[row2+1][col2+1] - n.sums[row2+1][col1] - n.sums[row1][col2+1] + n.sums[row1][col1]
}
