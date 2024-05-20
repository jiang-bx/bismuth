package tree

import "strings"

func IsValidSerialization1(preorder string) bool {
	arr := strings.Split(preorder, ",")
	stack := []string{}

	for _, v := range arr {
		stack = append(stack, v)
		for len(stack) >= 3 && stack[len(stack)-1] == "#" && stack[len(stack)-2] == "#" && stack[len(stack)-3] != "#" {
			stack = stack[:len(stack)-3]
			stack = append(stack, "#")
		}
	}
	return len(stack) == 1 && stack[0] == "#"
}

func IsValidSerialization(preorder string) bool {
	arr := strings.Split(preorder, ",")
	diff := 1
	for _, v := range arr {
		diff -= 1
		if diff < 0 {
			return false
		}

		if v != "#" {
			diff += 2
		}
	}
	return diff == 0
}
