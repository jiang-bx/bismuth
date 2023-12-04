package stack

import (
	"strconv"
	"strings"
)

func ExclusiveTime(n int, logs []string) []int {
	res := make([]int, n)
	stack := []int{}
	preTime := 0

	for _, v := range logs {
		vArr := strings.Split(v, ":")
		curTime, _ := strconv.Atoi(vArr[2])
		curIndex, _ := strconv.Atoi(vArr[0])

		if vArr[1] == "start" {
			if len(stack) != 0 {
				res[stack[len(stack)-1]] += curTime - preTime
			}
			stack = append(stack, curIndex)
			preTime = curTime
		} else {
			res[curIndex] += curTime - preTime + 1
			stack = stack[:len(stack)-1]
			preTime = curTime + 1
		}
	}

	return res
}
