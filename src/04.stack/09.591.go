package stack

import (
	"strings"
	"unicode"
)

func IsTagValid(code string) bool {
	n := len(code)
	if n == 0 {
		return false
	}

	tags := []string{}

	for i := 0; i < n; {
		if code[i] == '<' {
			if i == n-1 {
				return false
			} else if code[i+1] == '/' {
				j := strings.IndexByte(code[i:], '>')
				if j < 0 {
					return false
				}

				// </TAG> i 对应 <, i + j 对应>
				tag := code[i+2 : i+j]

				if len(tags) == 0 || tags[len(tags)-1] != tag {
					return false
				}

				tags = tags[:len(tags)-1]
				i = i + j + 1
				if len(tags) == 0 && i != n {
					return false
				}
			} else if code[i+1] == '!' {
				// <![CDATA[  无需关心的内容  ]]>
				if len(tags) == 0 {
					return false
				}

				// <![CDATA[ 长度为 9
				if i+9 > n {
					return false
				}

				cdata := code[i+2 : i+9]

				if cdata != "[CDATA[" {
					return false
				}

				j := strings.Index(code[i:], "]]>")

				if j < 0 {
					return false
				}

				i = i + j + 1
			} else {
				// <TAG>，i 对应 <，j 对应 >
				j := strings.IndexByte(code[i:], '>')

				// TAG 长度必须在范围 [1,9] 之间
				if j < 0 || j-1 < 1 || j-1 > 9 {
					return false
				}

				//TAG 必须由大写字母组成
				for k := i + 1; k < i+j; k++ {
					if !unicode.IsUpper(rune(code[k])) {
						return false
					}
				}
				tags = append(tags, code[i+1:i+j])
				i = i + j + 1
			}
		} else {
			if len(tags) == 0 {
				return false
			}
			i++
		}
	}

	return len(tags) == 0
}
