package dbpointer

func CircularArrayLoop(nums []int) bool {
	n := len(nums)
	next := func(i int) int {
		return (((i + nums[i]) % n) + n) % n
	}

	for i := range nums {
		slow := i
		fast := next(i)

		for nums[slow]*nums[fast] > 0 && nums[slow]*nums[next(fast)] > 0 {
			if fast == slow {
				if slow == next(slow) {
					break
				}
				return true
			}

			fast = next(next(fast))
			slow = next(slow)
		}
	}

	return false
}
