package graph

import (
	"sort"
)

// ! FindItinerary1 超时算法
//
//	@param tickets
//	@return []string
func FindItinerary1(tickets [][]string) []string {
	ans := []string{"JFK"}
	m := map[string][]string{}
	visitM := map[string][]bool{}

	for _, v := range tickets {
		from, to := v[0], v[1]

		if _, ok := m[from]; !ok {
			m[from] = []string{}
		}
		m[from] = append(m[from], to)
	}

	for k, v := range m {
		sort.Slice(v, func(i, j int) bool {
			return v[i] < v[j]
		})
		visitM[k] = make([]bool, len(v))
	}

	var backtrack func(startCity string, usedNum int) bool

	backtrack = func(startCity string, usedNum int) bool {
		if usedNum == len(tickets) {
			return true
		}

		nextTickets, ok := m[startCity]
		if !ok || len(nextTickets) == 0 {
			return false
		}

		for i, nextCity := range nextTickets {
			if visitM[startCity][i] {
				continue
			}

			// 标记一下 当前城市被使用
			visitM[startCity][i] = true
			ans = append(ans, nextCity)

			if backtrack(nextCity, usedNum+1) {
				return true
			}

			visitM[startCity][i] = false
			ans = ans[:len(ans)-1]
		}

		return false
	}

	backtrack(ans[0], 0)

	return ans
}

// FindItinerary 邻接表,求欧拉路径
//
//	@param tickets
//	@return []string
func FindItinerary(tickets [][]string) []string {
	ans := []string{}
	m := make(map[string][]string)

	for _, v := range tickets {
		from, to := v[0], v[1]
		m[from] = append(m[from], to)
	}

	for _, v := range m {
		sort.Strings(v)
	}

	var dfs func(startCity string)

	dfs = func(startCity string) {

		for len(m[startCity]) > 0 {
			nextCity := m[startCity][0]
			m[startCity] = m[startCity][1:]
			dfs(nextCity)
		}

		ans = append([]string{startCity}, ans...)
	}

	dfs("JFK")

	return ans
}
