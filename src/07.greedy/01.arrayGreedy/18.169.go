package array_greedy

func MajorityElement(nums []int) int {
	// 多数投票法

	// 候选人
	major := 0

	// 票数
	count := 0

	for _, v := range nums {

		// 如果票数为 0, 切换候选人
		if count == 0 {
			major = v
		}

		// 候选人相同, 票数 +1, 反之 -1
		if major == v {
			count += 1
		} else {
			count -= 1
		}
	}

	return major
}
