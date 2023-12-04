package transform

import (
	"strconv"
	"strings"
)

func OptimalDivision(nums []int) string {
	n := len(nums)
	res := ""

	for i, v := range nums {
		res += strconv.Itoa(v)
		if i != n-1 {
			res += "/"
		}
	}

	if n > 2 {
		res = strings.Replace(res, "/", "/(", 1)
		res += ")"
	}

	return res
}
