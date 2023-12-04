package number_bit

func TotalHammingDistance(nums []int) int {
	// 超时解法
	// count := 0
	// hammingDistance := func(x, y int) int {
	// 	c, n := 0, x^y
	// 	for n != 0 {
	// 		n &= (n - 1)
	// 		c++
	// 	}
	// 	return c
	// }
	// for i := 0; i < len(nums)-1; i++ {
	// 	for j := i + 1; j < len(nums); j++ {
	// 		count += hammingDistance(nums[i], nums[j])
	// 	}
	// }
	// return count

	// 统计所有数字二进制位中 同位中所有数字
	/*
			    1 2 3 4
		    ------------
			 4: 0 1 0 0
		    14: 1 1 1 0
			 2: 0 0 1 0
		    在第 1 个比特位上: 0 1 0 , 汉明距离: 0.1, 1.0 = 1 * 2 = 2
		    在第 2 个比特位上: 1 1 0 , 汉明距离: 1.0, 1.0 = 2 * 1 = 2
		    在第 3 个比特位上: 0 1 1 , 汉明距离: 0.1, 0.1 = 2 * 1 = 2
		    在第 4 个比特位上: 0 0 0 , 汉明距离: 3 个0, 0 个1, 0 * 3 = 0
	*/

	count, n := 0, len(nums)
	// 0 <= nums[i] <= 10^9, 从 0 - 29 位
	for i := 0; i < 30; i++ {
		total := 0
		for _, num := range nums {
			total += ((num >> i) & 1)
		}
		count += (n - total) * total
	}
	return count
}
