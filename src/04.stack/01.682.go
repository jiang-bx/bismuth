package stack

import "strconv"

func CalPoints(operations []string) int {
	stack := []int{}

	for _, v := range operations {
		if v == "C" {
			stack = stack[:len(stack)-1]
		} else if v == "D" {
			stack = append(stack, stack[len(stack)-1]*2)
		} else if v == "+" {
			stack = append(stack, stack[len(stack)-1]+stack[len(stack)-2])
		} else {
			num, _ := strconv.Atoi(v)
			stack = append(stack, num)
		}
	}

	count := 0
	for _, v := range stack {
		count += v
	}

	return count
}
