package stack

func SimplifyPath(path string) string {
	n := len(path)
	stack := make([]string, n)
	index := 0

	for i := 0; i < n; i++ {
		if path[i] != '/' {
			continue
		}

		temp := ""

		for j := i + 1; j < n; j++ {
			if path[j] == '/' {
				break
			}
			i++
			temp += string(path[j])
		}

		if temp == "." || temp == "" {
			continue
		} else if temp == ".." {
			if index > 0 {
				index--
			}
		} else {
			stack[index] = temp
			index++
		}
	}

	res := "/"
	for i := 0; i < index; i++ {
		res += stack[i]
		if index-1 != i {
			res += "/"
		}
	}

	return res
}
