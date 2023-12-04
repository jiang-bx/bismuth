package number_bit

import (
	"math"
	"strconv"
)

func NearestPalindromic(n string) string {
	nLen := len(n)
	m, _ := strconv.ParseInt(n, 10, 64)

	// 特殊情况:
	// < 10, 返回自身 - 1,
	// 10, 100, 1000,  返回自身 - 1, 结果: 9, 99, 999
	if m < 10 || m == int64(math.Pow10(nLen-1)) {
		return strconv.FormatInt(m-1, 10)
	}

	// 9, 99, 999, 返回自身 + 2, 结果: 11, 101, 1001
	if m+1 == int64(math.Pow10(nLen)) {
		return strconv.FormatInt(m+2, 10)
	}

	// 11, 101, 1001, 返回自身 - 2, 结果: 9, 99, 999
	if m-1 == int64(math.Pow10(nLen-1)) {
		return strconv.FormatInt(m-2, 10)
	}

	reverseStr := func(s *string) {
		str := []rune(*s)
		n := len(str)

		for i := 0; i < n/2; i++ {
			str[i], str[n-i-1] = str[n-i-1], str[i]
		}

		*s = string(str)
	}

	// 长度为奇数时, 取一半 + 1, 翻转时, 少翻转一位
	// +0: 13330 取 133, +0 = 133, 翻转为: 31, 拼接 13331
	// +1: 13330 取 133, +1 = 134, 翻转为: 31, 拼接 13431
	// -1: 13330 取 133, -1 = 132, 翻转为: 31, 拼接 13231
	// 取与 13330 绝对值大于 0, 并且最小的值: 13331

	// 长度为偶数时, 取一半
	// +0: 168861 取 168, +0 = 168, 翻转为: 861, 拼接 168861
	// +1: 168861 取 168, +1 = 169, 翻转为: 961, 拼接 169961
	// -1: 168861 取 168, -1 = 167, 翻转为: 761, 拼接 167761
	// 取与 168861 绝对值大于 0, 并且最小的值: 167761

	// 取一半
	pre := n[0 : (nLen+1)/2]
	minDiff := int64(math.MaxInt64)
	ans := ""

	for i := -1; i <= 1; i++ {
		preNum, _ := strconv.ParseInt(pre, 10, 64)
		newPre := (preNum | int64(0)) + int64(i)
		newStr := strconv.FormatInt(newPre, 10)

		// 长度为奇数
		if nLen&1 != 0 {
			// 翻转时少翻转一位
			newStr = newStr[0 : len(newStr)-1]
		}

		reverseStr(&newStr)

		newStr = strconv.FormatInt(newPre, 10) + newStr

		newNum, _ := strconv.ParseInt(newStr, 10, 64)

		diff := int64(math.Abs(float64(m - newNum)))

		if diff > 0 && diff < minDiff {
			minDiff = diff
			ans = newStr
		}
	}

	return ans
}
