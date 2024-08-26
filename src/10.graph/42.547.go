package graph

func FindCircleNum1(isConnected [][]int) int {
	n := len(isConnected)
	used := make([]bool, n)
	var dfs func(i int)
	dfs = func(i int) {
		used[i] = true
		for j := 0; j < n; j++ {
			if isConnected[i][j] == 1 && !used[j] {
				dfs(j)
			}
		}
	}

	count := 0

	for i := 0; i < n; i++ {
		if !used[i] {
			count++
			dfs(i)
		}
	}

	return count
}

func FindCircleNum(isConnected [][]int) int {
	n := len(isConnected)
	uf := &UnionFind{}

	uf.init(n)

	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			if isConnected[i][j] == 1 {
				uf.union(i, j)
			}
		}
	}

	return uf.size
}

type UnionFind struct {
	roots []int
	size  int
}

func (u *UnionFind) init(n int) {
	u.roots = make([]int, n)
	for i := 0; i < n; i++ {
		u.roots[i] = i
	}
	u.size = n
}

func (u *UnionFind) find(i int) int {
	if i == u.roots[i] {
		return i
	}

	u.roots[i] = u.find(u.roots[i])

	return u.roots[i]
}

func (u *UnionFind) union(x int, y int) {
	rootX := u.find(x)
	rootY := u.find(y)

	if rootX != rootY {
		u.roots[rootX] = rootY
		u.size--
	}
}
