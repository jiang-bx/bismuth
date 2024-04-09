package tree

// Definition for Employee.
type Employee struct {
	Id           int
	Importance   int
	Subordinates []int
}

func GetImportance(employees []*Employee, id int) int {
	// 递归
	// var m map[int]*Employee
	// var dfs func(curId int) int

	// m = map[int]*Employee{}

	// for _, v := range employees {
	// 	m[v.Id] = v
	// }

	// dfs = func(curId int) int {
	// 	v := m[curId]
	// 	ans := 0

	// 	ans += v.Importance

	// 	for _, s := range v.Subordinates {
	// 		ans += dfs(s)
	// 	}

	// 	return ans
	// }

	// return dfs(id)

	// 迭代
	m := map[int]*Employee{}

	for _, v := range employees {
		m[v.Id] = v
	}

	queue := []*Employee{}
	queue = append(queue, m[id])

	ans := 0

	for len(queue) > 0 {
		t := queue[0]
		queue = queue[1:]

		ans += t.Importance

		for _, v := range t.Subordinates {
			queue = append(queue, m[v])
		}
	}

	return ans
}
