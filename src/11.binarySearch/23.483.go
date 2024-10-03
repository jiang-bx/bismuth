package array_greedy

import "strconv"

func SmallestGoodBase(n string) string {
	num, _ := strconv.ParseInt(n, 10, 64)

	check := func(x, m int64) int {
		ans := int64(0)
		for i := int64(0); i < m; i++ {
			if ans > (num-1)/x {
				return 1
			}
			ans = ans*x + 1
		}
		if ans == num {
			return 0
		} else if ans < num {
			return -1
		} else {
			return 1
		}
	}

	for i := int64(64); i > 0; i-- {
		l, r := int64(2), num
		for l < r {
			mid := l + (r-l)/2
			tmp := check(mid, i)
			if tmp == 0 {
				return strconv.FormatInt(mid, 10)
			} else if tmp < 0 {
				l = mid + 1
			} else {
				r = mid
			}
		}
	}

	return strconv.FormatInt(num-1, 10)
}
