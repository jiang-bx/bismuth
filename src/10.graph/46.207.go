package graph

func CanFinish(numCourses int, prerequisites [][]int) bool {
	inDegree := make([]int, numCourses)
	m := make(map[int][]int)

	for _, v := range prerequisites {
		end, start := v[0], v[1]

		inDegree[end]++

		if _, ok := m[start]; !ok {
			m[start] = []int{end}
		} else {
			m[start] = append(m[start], end)
		}
	}

	queue := []int{}
	for i, v := range inDegree {
		if v == 0 {
			queue = append(queue, i)
		}
	}

	count := 0

	for len(queue) > 0 {
		cur := queue[0]
		queue = queue[1:]

		if _, ok := m[cur]; ok {
			for _, v := range m[cur] {
				inDegree[v]--
				if inDegree[v] == 0 {
					queue = append(queue, v)
				}
			}
		}
		count++
	}

	return count == numCourses
}
