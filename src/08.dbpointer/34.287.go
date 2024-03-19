package dbpointer

func FindDuplicate(nums []int) int {
	fast, slow := 0, 0
	slow = nums[slow]
	fast = nums[nums[fast]]

	for slow != fast {
		slow = nums[slow]
		fast = nums[nums[fast]]
	}

	pre := 0
	for pre != slow {
		pre = nums[pre]
		slow = nums[slow]
	}

	return pre
}
