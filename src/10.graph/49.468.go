package graph

import (
	"strconv"
	"strings"
)

func ValidIPAddress(queryIP string) string {
	v4 := strings.Split(queryIP, ".")
	v6 := strings.Split(queryIP, ":")

	checkV4 := func(str string) bool {
		n := len(str)

		// 不能有前导 0
		if n > 1 && str[0] == '0' {
			return false
		}
		// 不能超过 255
		num, err := strconv.Atoi(str)
		if err != nil {
			return false
		}

		// 0 - 255
		if num > 255 || num < 0 {
			return false
		}

		return true
	}

	checkV6 := func(str string) bool {
		n := len(str)

		// 0 - 4 长度
		if n > 4 || n < 1 {
			return false
		}

		// 包含数字和字符 a - f 和 A - F
		for _, ch := range str {
			if !((ch >= '0' && ch <= '9') || (ch >= 'a' && ch <= 'f') || (ch >= 'A' && ch <= 'F')) {
				return false
			}
		}

		return true
	}

	if len(v4) == 4 {
		for _, str := range v4 {
			if !checkV4(str) {
				return "Neither"
			}
		}
		return "IPv4"
	} else if len(v6) == 8 {
		for _, str := range v6 {
			if !checkV6(str) {
				return "Neither"
			}
		}
		return "IPv6"
	}

	return "Neither"
}
