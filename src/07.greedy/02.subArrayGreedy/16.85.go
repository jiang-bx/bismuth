package sub_array_greedy

func MaximalRectangle(matrix [][]byte) int {
	hLen := len(matrix[0]) + 2
	heights := make([]int, hLen)
	stack := []int{}
	maxArea := 0

	for _, row := range matrix {
		for j := 0; j < hLen; j++ {

			// 动态计算 矩形高度
			if j == 0 || j == hLen-1 || row[j-1] == '0' {
				heights[j] = 0
			} else {
				heights[j] += 1
			}

			// 判断是否找到最高柱子的索引
			for len(stack) > 0 && heights[stack[len(stack)-1]] > heights[j] {
				cur := stack[len(stack)-1]

				// 此时, j 为当前最高柱子的右边界, 不包含
				right := j - 1

				// 左边界为: 栈顶元素的下一个元素
				stack = stack[:len(stack)-1]
				left := stack[len(stack)-1]

				// 确定面积
				area := (right - left) * heights[cur]

				// 计算最大面积

				if maxArea < area {
					maxArea = area
				}
			}

			stack = append(stack, j)
		}
	}

	return maxArea
}
