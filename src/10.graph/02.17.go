package graph

import "strconv"

func LetterCombinations(digits string) []string {
	var dfs func(depth int)
	ans := []string{}
	list := []string{"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"}

	if digits == "" {
		return ans
	}

	n := len(digits)
	path := make([]byte, n)

	dfs = func(depth int) {
		if depth == len(digits) {
			ans = append(ans, string(path))
			return
		}

		index, _ := strconv.Atoi(string(digits[depth]))
		str := list[index]

		for i := 0; i < len(str); i++ {
			path[depth] = str[i]
			dfs(depth + 1)
		}
	}

	dfs(0)

	return ans
}
