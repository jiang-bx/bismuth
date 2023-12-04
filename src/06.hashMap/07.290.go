package hashmap

import "strings"

func WordPattern(pattern string, s string) bool {
	words := strings.Split(s, " ")

	if len(words) != len(pattern) {
		return false
	}

	w2p := map[string]byte{}
	p2w := map[byte]string{}

	for i, w := range words {
		ch := pattern[i]

		if v, ok := w2p[w]; ok && v != ch {
			return false
		}

		if v, ok := p2w[ch]; ok && v != w {
			return false
		}

		w2p[w] = ch
		p2w[ch] = w
	}

	return true
}
