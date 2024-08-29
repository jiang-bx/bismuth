package graph

func CalcEquation1(equations [][]string, values []float64, queries [][]string) []float64 {
	n := len(equations)
	uf := NewUnionFind399(n * 2)
	m := make(map[string]int)
	id := 0

	for i, v := range equations {
		A, B := v[0], v[1]

		if _, ok := m[A]; !ok {
			m[A] = id
			id++
		}

		if _, ok := m[B]; !ok {
			m[B] = id
			id++
		}

		uf.Union(m[A], m[B], values[i])
	}

	res := make([]float64, len(queries))

	for i, v := range queries {
		A, B := v[0], v[1]

		_, okA := m[A]
		_, okB := m[B]

		if !okA || !okB {
			res[i] = -1.0
		} else {
			res[i] = uf.IsConnected(m[A], m[B])
		}
	}

	return res
}

type UnionFind399 struct {
	Parent  []int
	Weights []float64
}

func NewUnionFind399(n int) *UnionFind399 {
	uf := &UnionFind399{}

	uf.Parent = make([]int, n)
	uf.Weights = make([]float64, n)

	for i := 0; i < n; i++ {
		uf.Parent[i] = i
		uf.Weights[i] = 1
	}

	return uf
}

func (u *UnionFind399) Find(x int) int {
	if x != u.Parent[x] {
		origin := u.Parent[x]
		u.Parent[x] = u.Find(u.Parent[x])
		u.Weights[x] *= u.Weights[origin]
	}

	return u.Parent[x]
}

func (u *UnionFind399) Union(x, y int, val float64) {
	rootX := u.Find(x)
	rootY := u.Find(y)

	if rootX == rootY {
		return
	}

	u.Parent[rootX] = rootY

	u.Weights[rootX] = (u.Weights[y] * val) / u.Weights[x]
}

func (u *UnionFind399) IsConnected(x, y int) float64 {
	rootX := u.Find(x)
	rootY := u.Find(y)

	if rootX == rootY {
		return u.Weights[x] / u.Weights[y]
	} else {
		return -1.0
	}
}

func CalcEquation(equations [][]string, values []float64, queries [][]string) []float64 {
	ga := make(map[string]map[string]float64)

	var dfs func(a, b string, visited map[string]bool) float64

	dfs = func(a, b string, visited map[string]bool) float64 {
		if a == b {
			return 1
		}

		visited[a] = true

		for key, val := range ga[a] {
			if visited[key] {
				continue
			}

			d := dfs(key, b, visited)
			if d != -1 {
				return d * val
			}
		}

		return -1
	}

	for i, v := range equations {
		a, b := v[0], v[1]
		if _, ok := ga[a]; !ok {
			ga[a] = make(map[string]float64)
		}

		if _, ok := ga[b]; !ok {
			ga[b] = make(map[string]float64)
		}

		ga[a][b] = values[i]
		ga[b][a] = 1 / values[i]
	}

	res := []float64{}

	for _, v := range queries {
		a, b := v[0], v[1]
		_, okA := ga[a]
		_, okB := ga[b]

		if !okA || !okB {
			res = append(res, -1)
		} else {
			res = append(res, dfs(a, b, map[string]bool{}))
		}
	}

	return res
}
