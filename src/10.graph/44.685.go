package graph

func FindRedundantDirectedConnection(edges [][]int) []int {
	n := len(edges)
	father := make([]int, n+1)
	for i := 0; i < n; i++ {
		father[i] = i
	}

	find := func(x int) int {
		for father[x] != x {
			x = father[x]
		}
		return x
	}

	for i := 0; i < n; i++ {
		x1 := find(edges[i][0])
		x2 := find(edges[i][1])

		if x1 == x2 {
			return edges[i]
		} else {
			father[x1] = x2
		}
	}

	return []int{0, 0}
}
