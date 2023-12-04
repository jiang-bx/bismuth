package transform

import (
	"strconv"
	"strings"
)

func CountAndSay(n int) string {
	/**
	prevEl, nextEl, i := "1", "", 1

	for i < n {
		pLen := len(prevEl)
		start, end, count := 0, 0, 0
		for end < pLen {
			if prevEl[start] == prevEl[end] {
				count++
				end++
			} else {
				nextEl += strconv.Itoa(count) + string(prevEl[start])
				count = 0
				start = end
			}
		}

		if count > 0 {
			nextEl += strconv.Itoa(count) + string(prevEl[start])
		}
		i++
		prevEl = nextEl
		nextEl = ""
	}

	return prevEl
	*/

	prev := "1"
	for i := 2; i <= n; i++ {
		cur := &strings.Builder{}

		for j, start := 0, 0; j < len(prev); start = j {
			for j < len(prev) && prev[j] == prev[start] {
				j++
			}
			cur.WriteString(strconv.Itoa(j - start))
			cur.WriteByte(prev[start])
		}
		prev = cur.String()
	}
	return prev
}
