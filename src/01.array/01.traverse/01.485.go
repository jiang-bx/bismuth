package array_traverse

/**
 * 给定一个二进制数组， 计算其中最大连续 1 的个数。
 *
 * 示例:
 * 输入：[1,1,0,1,1,1]
 * 输出：3
 * 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
 *
 * 提示：
 * 输入的数组只包含 0 和 1 。
 * 输入数组的长度是正整数，且不超过 10,000。
 */

func FindMaxConsecutiveOnes(arr []int) int {
	var maxCount int = 0

	var oneCount int = 0

	var i int = 0

	var length int = len(arr)

	for ; i < length; i++ {
		// 标记是否出现 1
		if arr[i] == 1 {
			oneCount++
		} else {
			if maxCount < oneCount {
				maxCount = oneCount
			}
			oneCount = 0
		}
	}

	if maxCount < oneCount {
		maxCount = oneCount
	}

	return maxCount
}
