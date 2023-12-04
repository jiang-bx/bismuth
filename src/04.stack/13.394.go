package stack

import "strings"

func DecodeString(s string) string {
	// 辅助栈
	// res := ""
	// stackStr := []string{}
	// stackNum := []int{}
	// num := 0

	// for _, v := range s {
	// 	if v == '[' {
	// 		stackNum = append(stackNum, num)
	// 		stackStr = append(stackStr, res)
	// 		num = 0
	// 		res = ""
	// 	} else if v == ']' {
	// 		lastNum := stackNum[len(stackNum)-1]
	// 		lastStr := stackStr[len(stackStr)-1]
	// 		res = lastStr + strings.Repeat(res, lastNum)
	// 		stackNum = stackNum[:len(stackNum)-1]
	// 		stackStr = stackStr[:len(stackStr)-1]
	// 	} else if '0' <= v && v <= '9' {
	// 		num = num*10 + int(v-'0')
	// 	} else {
	// 		res += string(v)
	// 	}
	// }

	// return res

	_, val := searchHandle(s, 0)
	return val
}

func searchHandle(s string, i int) (index int, val string) {
	index = 0
	val = ""
	res := ""
	num := 0
	for i < len(s) {
		if s[i] == '[' {
			index, val = searchHandle(s, i+1)
			i = index
			res += strings.Repeat(val, num)
			num = 0
		} else if s[i] == ']' {
			val = res
			index = i
			return
		} else if '0' <= s[i] && s[i] <= '9' {
			num = num*10 + int(s[i]-'0')
		} else {
			res += string(s[i])
		}
		i++
	}
	val = res
	index = i
	return
}
