package match

import (
	"strings"
)

func RepeatedSubstringPattern(s string) bool {
	return strings.Contains((s + s)[1:(2*len(s)-1)], s)
}
