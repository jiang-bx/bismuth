package graph

import (
	"fmt"
	"math/bits"
)

// ReadBinaryWatch 枚举法
//
//	@param turnedOn
//	@return []string
func ReadBinaryWatch1(turnedOn int) []string {

	ans := []string{}
	for h := 0; h < 12; h++ {
		for m := 0; m < 60; m++ {

			if bits.OnesCount(uint(h))+bits.OnesCount(uint(m)) == turnedOn {
				ans = append(ans, fmt.Sprintf("%d:%02d", h, m))
			}
		}
	}
	return ans
}

// ReadBinaryWatch 回溯法
//
//	@param turnedOn
//	@return []string
func ReadBinaryWatch(turnedOn int) []string {
	var backtrack func(h, m, num int, hour, minutes []int, isHour bool)
	ans := []string{}
	backtrack = func(h, m, num int, hour, minutes []int, isHour bool) {
		if num == 0 {
			ans = append(ans, fmt.Sprintf("%d:%02d", h, m))
			return
		}

		if isHour {
			for i, v := range hour {
				if h+v < 12 {
					backtrack(h+v, m, num-1, hour[i+1:], minutes, true)
				}
			}
		}

		for i, v := range minutes {
			if m+v < 60 {
				backtrack(h, m+v, num-1, hour, minutes[i+1:], false)
			}
		}
	}

	backtrack(0, 0, turnedOn, []int{1, 2, 4, 8}, []int{1, 2, 4, 8, 16, 32}, true)

	return ans
}
