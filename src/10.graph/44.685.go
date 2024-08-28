package graph

func FindRedundantDirectedConnection(edges [][]int) []int {
	n := len(edges)
	father := make([]int, n+1)
	for i := 0; i < n+1; i++ {
		father[i] = i
	}
	uf := newUnionFind685(n + 1)

	var conflictEdge, cycleEdge []int

	for _, edge := range edges {
		from, to := edge[0], edge[1]

		if father[to] != to {
			conflictEdge = edge
		} else {
			father[to] = from

			if uf.Find(from) == uf.Find(to) {
				cycleEdge = edge
			} else {
				uf.Union(from, to)
			}
		}
	}

	if conflictEdge == nil {
		return cycleEdge
	}

	if cycleEdge != nil {
		return []int{father[conflictEdge[1]], conflictEdge[1]}
	}

	return conflictEdge
}

type UnionFind685 struct {
	Roots []int
}

func (u *UnionFind685) Find(x int) int {
	if x != u.Roots[x] {
		u.Roots[x] = u.Find(u.Roots[x])
	}
	return u.Roots[x]
}

func (u *UnionFind685) Union(x, y int) {
	u.Roots[u.Find(x)] = u.Find(y)
}

func newUnionFind685(n int) *UnionFind685 {
	uf := &UnionFind685{}
	uf.Roots = make([]int, n)
	for i := 0; i < n; i++ {
		uf.Roots[i] = i
	}

	return uf
}
