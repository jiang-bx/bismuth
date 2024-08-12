package c410

func countGoodNodes(edges [][]int) int {
	ans := 0
	g := map[int][]int{}

	for _, v := range edges {
		a, b := v[0], v[1]
		g[a] = append(g[a], b)
		g[b] = append(g[b], a)
	}

	var dfs func(start int, parent int) int

	dfs = func(start int, parent int) int {
		subSizes := []int{}
		sum := 0

		for _, child := range g[start] {
			if child != parent {
				size := dfs(child, start)
				subSizes = append(subSizes, size)
				sum += size
			}
		}

		// 判断当前节点是否是好节点
		isGood := true
		for _, size := range subSizes {
			if size != subSizes[0] {
				isGood = false
				break
			}
		}
		if isGood {
			ans++
		}

		return 1 + sum
	}

	dfs(0, -1)

	return ans
}
