package sub_array_greedy

func LargestRectangleArea(heights []int) int {
	stack := []int{}
	ans := 0

	heights = append(heights, 0)
	heights = append([]int{0}, heights...)

	for i := range heights {
		for len(stack) > 0 && heights[stack[len(stack)-1]] > heights[i] {
			// 确定当前最高的柱子索引值
			cur := stack[len(stack)-1]

			// 此时 i 为当前最高柱子的右边界(不包含)
			right := i - 1

			// 左边界为: 栈顶元素的下一个元素
			stack = stack[:len(stack)-1]
			left := stack[len(stack)-1]

			// 确定宽度
			w := right - left

			if ans < w*heights[cur] {
				ans = w * heights[cur]
			}
		}
		stack = append(stack, i)
	}

	return ans
}
