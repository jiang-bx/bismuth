package graph

func ArrayNesting(nums []int) int {
	ans := 0
	for i, v := range nums {
		if v == -1 {
			continue
		}

		next := nums[i]
		size := 1

		for next != i {
			temp := nums[next]
			nums[next] = -1
			size++
			next = temp
		}

		if ans < size {
			ans = size
		}
	}
	return ans
}
