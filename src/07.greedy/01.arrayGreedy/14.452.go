package array_greedy

import (
	"sort"
)

func FindMinArrowShots(points [][]int) int {
	n := len(points)
	if n <= 1 {
		return n
	}

	/**
	// 左端排序
	sort.Slice(points, func(i, j int) bool {
		return points[i][0] < points[j][0]
	})

	fmt.Println(points)
	res := 1
	ran := []int{points[0][0], points[0][1]}

	for i := 1; i < n; i++ {
		// 如果有交集
		cur := points[i]

		if cur[0] <= ran[1] {
			if cur[0] > ran[0] {
				ran[0] = cur[0]
			}
			if cur[1] < ran[1] {
				ran[1] = cur[1]
			}
		} else {
			res++
			ran[0] = cur[0]
			ran[1] = cur[1]
		}

	}

	return res
	*/

	// 右端排序
	sort.Slice(points, func(i, j int) bool {
		return points[i][1] < points[j][1]
	})

	res := 1
	pos := points[0][1]

	for i := 1; i < n; i++ {
		cur := points[i]
		if cur[0] > pos {
			pos = cur[1]
			res++
		}
	}

	return res
}
