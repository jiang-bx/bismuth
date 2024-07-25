package graph

func NextPermutation1(nums []int) {
	// ? 判断字典序的大小, 如何判断
	// ! 将数组进行组合, [1,2,3] => 123; [1, 3, 2] => 132

	// ? 如何判断下一个最大
	// ! 1. 倒序遍历查找到第一个降序的元素[i, j]( 找到尽可能小的大数 ),
	// !     找不到必为降序排列, 直接返回反转升序结果
	// ! 2. 倒序遍历找到第一个大于降序的 i 元素值 k ( 找到尽可能大的小数 )
	// ! 3. 交换 大数 i 和 小数 k,
	// ! 4. 交换后 [i+1, end] 必为 降序排列, 所以将其反转升序

	n := len(nums)
	start := -1
	for i := n - 1; i > 0; i-- {
		if nums[i] > nums[i-1] {
			start = i - 1
			break
		}
	}

	if start == -1 {
		// 反转 升序排列 nums
		for i, j := 0, n-1; i < j; i, j = i+1, j-1 {
			nums[i], nums[j] = nums[j], nums[i]
		}
		return
	}

	k := 0
	for i := n - 1; i > start; i-- {
		if nums[i] > nums[start] {
			k = i
			break
		}
	}

	// 交换 k 月 start
	nums[k], nums[start] = nums[start], nums[k]

	// 反转 [start + 1, end]
	for i, j := start+1, n-1; i < j; i, j = i+1, j-1 {
		nums[i], nums[j] = nums[j], nums[i]
	}
}

// NextPermutation 优化
//
//	@param nums
func NextPermutation(nums []int) {
	// ? 判断字典序的大小, 如何判断
	// ! 将数组进行组合, [1,2,3] => 123; [1, 3, 2] => 132

	// ? 如何判断下一个最大
	// ! 1. 倒序遍历查找到第一个降序的元素[i, j]( 找到尽可能小的大数 ),
	// !     找不到必为降序排列, 直接返回反转升序结果
	// ! 2. 倒序遍历找到第一个大于降序的 i 元素值 k ( 找到尽可能大的小数 )
	// ! 3. 交换 大数 i 和 小数 k,
	// ! 4. 交换后 [i+1, end] 必为 降序排列, 所以将其反转升序

	n := len(nums)
	i := n - 2
	j := n - 1
	k := n - 1

	// 当 nums[j] > nums[i], 循环结束
	for i >= 0 && nums[i] >= nums[j] {
		i--
		j--
	}

	if i >= 0 {
		// 找到 k 值
		for nums[i] >= nums[k] {
			k--
		}
		// 交换 k 月 start
		nums[k], nums[i] = nums[i], nums[k]
	}

	// 反转 [j, end]
	for i, j := j, n-1; i < j; i, j = i+1, j-1 {
		nums[i], nums[j] = nums[j], nums[i]
	}
}
