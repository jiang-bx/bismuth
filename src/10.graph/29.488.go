package graph

import (
	"math"
	"strconv"
	"strings"
)

func FindMinStep(board string, hand string) int {
	m := len(hand)
	p := map[string]int{}
	var dfs func(a string, cur int) int
	dfs = func(a string, cur int) int {
		if len(a) == 0 {
			return 0
		}

		key := a + "_" + strconv.Itoa(cur)

		if v, ok := p[key]; ok {
			return v
		}

		res := math.MaxUint32
		n := len(a)

		for i := 0; i < m; i++ {
			if ((cur >> i) & 1) == 1 {
				continue
			}

			next := (1 << i) | cur

			for j := 0; j <= n; j++ {
				ok := false

				if j > 0 && j < n && a[j] == a[j-1] && a[j-1] != hand[i] {
					ok = true
				}

				if j < n && a[j] == hand[i] {
					ok = true
				}

				if !ok {
					continue
				}

				sb := strings.Builder{}
				sb.WriteString(a[:j])
				sb.WriteByte(hand[i])

				if j != n {
					sb.WriteString(a[j:])
				}

				k := j

				for k >= 0 && k < sb.Len() {
					bb := sb.String()
					c := bb[k]
					l := k
					r := k

					for l >= 0 && bb[l] == c {
						l--
					}

					for r < len(bb) && bb[r] == c {
						r++
					}

					if r-l-1 >= 3 {
						bb = bb[:l+1] + bb[r:]
						sb.Reset()
						sb.WriteString(bb)
						if l >= 0 {
							k = l
						} else {
							k = r
						}
					} else {
						break
					}
				}

				d := dfs(sb.String(), next) + 1
				if d < res {
					res = d
				}
			}
		}
		p[key] = res
		return res
	}

	ans := dfs(board, 1<<m)

	if ans == math.MaxUint32 {
		return -1
	}

	return ans
}
