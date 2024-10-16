package arraydp

func Jump(nums []int) int {
	end := 0
	maxPos := 0
	count := 0

	for i := 0; i < len(nums)-1; i++ {
		if i+nums[i] > maxPos {
			maxPos = i + nums[i]
		}
		if i == end {
			end = maxPos
			count++
		}
	}

	return count
}
