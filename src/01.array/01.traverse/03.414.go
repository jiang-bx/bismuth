package array_traverse

import (
	"math"
)

/**
 * 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
 *
 * 示例 1：
 * 输入：[3, 2, 1]
 * 输出：1
 * 解释：第三大的数是 1 。
 *
 * 示例 2：
 * 输入：[1, 2]
 * 输出：2
 * 解释：第三大的数不存在, 所以返回最大的数 2 。
 *
 * 示例 3：
 * 输入：[2, 2, 3, 1]
 * 输出：1
 * 解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
 * 此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。
 *
 * 提示：
 * 1 <= nums.length <= 104
 * -231 <= nums[i] <= 231 - 1
 *
 * 进阶：你能设计一个时间复杂度 O(n) 的解决方案吗？
 */

func ThirdMax(arr []int) int {

	length := len(arr)

	if length == 0 {
		return 0
	}

	i := 1
	one := arr[0]
	two := math.MinInt
	three := math.MinInt

	for ; i < length; i++ {
		current := arr[i]

		if current == one || current == two || current == three {
			continue
		}

		if current > one {
			three = two
			two = one
			one = current
		} else if current > two {
			three = two
			two = current
		} else if current > three {
			three = current
		}

	}

	if three == math.MinInt {
		return one
	} else {
		return three
	}
}
