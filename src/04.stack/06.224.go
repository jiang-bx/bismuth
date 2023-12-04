package stack

import "unicode"

func helper(k *int, s *string) int {
	n := len(*s)
	stack := []int{}
	num := 0
	sign := '+'

	for ; *k < n; *k++ {
		v := rune((*s)[*k])
		if unicode.IsDigit(v) {
			num = num*10 + int(rune(v)-'0')
		}

		if v == '(' {
			*k++
			num = helper(k, s)
		}

		if *k <= n-1 {
			v = rune((*s)[*k])
		}

		if *k == n-1 || !unicode.IsDigit(v) && v != ' ' {
			switch sign {
			case '+':
				stack = append(stack, num)
			case '-':
				stack = append(stack, -num)
			case '*':
				stack[len(stack)-1] *= num
			case '/':
				stack[len(stack)-1] /= num
			default:
				break
			}
			sign = v
			num = 0
		}

		if v == ')' {
			*k++
			break
		}
	}

	res := 0

	for _, v := range stack {
		res += v
	}

	return res
}

func Calculate1(s string) int {
	k := 0

	return helper(&k, &s)
}
