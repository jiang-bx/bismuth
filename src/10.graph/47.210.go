package graph

func FindOrder(numCourses int, prerequisites [][]int) []int {
	inDrg := make([]int, numCourses)
	mp := make(map[int][]int)
	for _, v := range prerequisites {
		end, start := v[0], v[1]

		inDrg[end]++

		if _, ok := mp[start]; !ok {
			mp[start] = []int{end}
		} else {
			mp[start] = append(mp[start], end)
		}
	}

	queue := []int{}

	for i, v := range inDrg {
		if v == 0 {
			queue = append(queue, i)
		}
	}

	res := []int{}

	for len(queue) > 0 {
		cur := queue[0]
		queue = queue[1:]
		res = append(res, cur)

		if _, ok := mp[cur]; ok {
			for _, v := range mp[cur] {
				inDrg[v]--

				if inDrg[v] == 0 {
					queue = append(queue, v)
				}
			}
		}
	}

	if len(res) == numCourses {
		return res
	}

	return []int{}
}
