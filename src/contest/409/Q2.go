package c409

import "container/list"

func shortestDistanceAfterQueries(n int, queries [][]int) []int {
	// 初始化图，使用邻接表表示
	graph := make([][]int, n)
	for i := 0; i < n-1; i++ {
		graph[i] = append(graph[i], i+1) // 添加初始的单向道路
	}

	// 存储每次查询后的结果
	answer := make([]int, len(queries))

	// BFS 函数，用于计算从城市 0 到城市 n-1 的最短路径
	bfs := func() int {
		distances := make([]int, n)
		for i := range distances {
			distances[i] = -1 // 初始化为 -1，表示不可达
		}
		distances[0] = 0 // 从城市 0 到城市 0 的距离为 0

		queue := list.New()
		queue.PushBack(0) // 从城市 0 开始

		for queue.Len() > 0 {
			// 取出队头元素
			city := queue.Remove(queue.Front()).(int)
			currentDistance := distances[city]

			for _, neighbor := range graph[city] {
				if distances[neighbor] == -1 { // 只访问未访问过的城市
					distances[neighbor] = currentDistance + 1
					queue.PushBack(neighbor)
				}
			}
		}

		// 返回从城市 0 到城市 n-1 的最短路径长度
		return distances[n-1]
	}

	// 处理每个查询
	for i, query := range queries {
		ui, vi := query[0], query[1]
		graph[ui] = append(graph[ui], vi) // 添加新道路
		shortestDistance := bfs()         // 计算最短路径
		answer[i] = shortestDistance      // 存储结果
	}

	return answer
}

// func min(a, b int) int {
// 	if a < b {
// 		return a
// 	}
// 	return b
// }
