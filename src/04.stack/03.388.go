package stack

func LengthLongestPath(input string) int {
	n := len(input)
	res := 0
	levelList := make([]int, n+2)
	levelList[0] = 0

	for i := 0; i < n; {
		j := i
		level := 0
		isDir := true

		for ; j < n; j++ {
			if input[j] == '\n' {
				break
			}

			if input[j] == '\t' {
				level++
			}

			if input[j] == '.' {
				isDir = false
			}
		}

		curLen := j - i - level

		level++

		if isDir {
			levelList[level] = levelList[level-1] + curLen + 1
		} else {
			curTotal := curLen + levelList[level-1]
			if curTotal > res {
				res = curTotal
			}
		}

		i = j + 1
	}

	return res
}
