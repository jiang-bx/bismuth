package transform

import (
	"sort"
	"strconv"
	"strings"
)

func minF(a, b int) int {
	if a > b {
		return b
	}
	return a
}

func FindMinDifference(timePoints []string) int {
	n := len(timePoints)
	maxTime := 24 * 60

	if n > maxTime {
		return 0
	}

	timeMinutes := make([]int, n)
	for i, v := range timePoints {
		item := strings.Split(v, ":")
		hour, _ := strconv.Atoi(item[0])
		minute, _ := strconv.Atoi(item[1])
		timeMinutes[i] = hour*60 + minute
	}

	sort.Ints(timeMinutes)

	min := minF(timeMinutes[0]+maxTime-timeMinutes[n-1], maxTime)
	for i := 0; i < n-1; i++ {
		min = minF(min, timeMinutes[i+1]-timeMinutes[i])
	}

	return min
}
