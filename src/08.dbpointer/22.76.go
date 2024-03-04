package dbpointer

import (
	"math"
)

func MinWindow(s string, t string) string {

	cnt := make([]int, 124)
	total := len(t)
	size := math.MaxInt
	start := 0
	l := 0

	for _, v := range t {
		cnt[v]++
	}

	for r, c := range s {
		if cnt[c] > 0 {
			total--
		}
		cnt[c]--

		if total != 0 {
			continue
		}

		for l < r && cnt[s[l]] < 0 {
			cnt[s[l]]++
			l++
		}

		if r-l+1 < size {
			size = r - l + 1
			start = l
		}
	}

	if size == math.MaxInt {
		return ""
	}

	return s[start : start+size]
}
