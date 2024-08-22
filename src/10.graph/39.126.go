package graph

func FindLadders(beginWord string, endWord string, wordList []string) [][]string {
	ans := [][]string{}
	wordSet := make(map[string]bool)
	for _, v := range wordList {
		wordSet[v] = true
	}
	if !wordSet[endWord] {
		return ans
	}
	wordSet[beginWord] = false

	steps := make(map[string]int)
	steps[beginWord] = 0

	from := make(map[string]map[string]bool)

	step := 0
	found := false

	queue := []string{beginWord}

	for len(queue) > 0 {
		step++
		size := len(queue)
		for i := 0; i < size; i++ {
			curWord := queue[0]
			queue = queue[1:]

			for j := 0; j < len(curWord); j++ {
				for k := 'a'; k <= 'z'; k++ {
					nextWord := curWord[:j] + string(k) + curWord[j+1:]

					if val, ok := steps[nextWord]; ok && val == step {
						from[nextWord][curWord] = true
					}

					if !wordSet[nextWord] {
						continue
					}

					wordSet[nextWord] = false

					queue = append(queue, nextWord)

					from[nextWord] = make(map[string]bool)
					from[nextWord][curWord] = true

					steps[nextWord] = step

					if nextWord == endWord {
						found = true
					}
				}
			}
		}

		if found {
			break
		}
	}

	var dfs func(curWord string)
	onPath := []string{endWord}
	dfs = func(curWord string) {
		if curWord == beginWord {
			ans = append(ans, append([]string{}, onPath...))
			return
		}

		for val := range from[curWord] {
			onPath = append([]string{val}, onPath...)
			dfs(val)
			onPath = onPath[1:]
		}
	}

	if found {
		dfs(endWord)
	}

	return ans
}
