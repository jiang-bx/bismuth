package graph

func LadderLength1(beginWord string, endWord string, wordList []string) int {
	m := map[string]bool{}
	for _, v := range wordList {
		m[v] = true
	}

	if !m[endWord] {
		return 0
	}

	queue := []string{beginWord}
	count := 0

	for len(queue) > 0 {
		size := len(queue)
		for i := 0; i < size; i++ {
			cur := queue[0]
			queue = queue[1:]

			if cur == endWord {
				return count + 1
			}

			for c := 0; c < len(cur); c++ {
				for j := 'a'; j <= 'z'; j++ {
					newWord := cur[:c] + string(j) + cur[c+1:]
					if m[newWord] {
						queue = append(queue, newWord)
						m[newWord] = false
					}
				}
			}
		}
		count++
	}

	return 0
}

func LadderLength(beginWord string, endWord string, wordList []string) int {
	m := map[string]bool{}
	for _, v := range wordList {
		m[v] = true
	}

	if !m[endWord] {
		return 0
	}

	visited := make(map[string]bool)
	beginSet := make(map[string]bool)
	endSet := make(map[string]bool)
	beginSet[beginWord] = true
	endSet[endWord] = true

	count := 1

	for len(beginSet) > 0 && len(endSet) > 0 {
		// 选少的哈希表进行查找
		if len(beginSet) > len(endSet) {
			beginSet, endSet = endSet, beginSet
		}

		nextSet := make(map[string]bool)

		for word := range beginSet {
			for i := 0; i < len(word); i++ {
				for k := 'a'; k <= 'z'; k++ {
					if byte(k) == word[i] {
						continue
					}

					nextWord := word[:i] + string(k) + word[i+1:]
					if m[nextWord] {
						if endSet[nextWord] {
							return count + 1
						}

						if !visited[nextWord] {
							nextSet[nextWord] = true
							visited[nextWord] = true
						}
					}
				}
			}
		}

		beginSet = nextSet
		count++
	}

	return 0
}
