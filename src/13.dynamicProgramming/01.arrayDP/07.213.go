package arraydp

func Rob_213(nums []int) int {
	myRob := func(vals []int) int {
		cur := 0
		prev := 0

		for _, v := range vals {
			temp := prev + v
			if temp < cur {
				temp = cur
			}

			prev = cur
			cur = temp
		}

		return cur
	}

	n := len(nums)

	if n == 0 {
		return 0
	}

	if n == 1 {
		return nums[0]
	}

	a := myRob(nums[1:])
	b := myRob(nums[:n-1])

	if a > b {
		return a
	}

	return b
}
