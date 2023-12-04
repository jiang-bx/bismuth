package transform

import (
	"sort"
	"strconv"
)

func FindRelativeRanks(score []int) []string {
	desc := []string{"Gold Medal", "Silver Medal", "Bronze Medal"}
	n := len(score)
	type pair struct {
		score int
		index int
	}

	newScore := make([]pair, n)

	for i, v := range score {
		newScore[i] = pair{
			score: v,
			index: i,
		}
	}

	sort.Slice(newScore, func(i, j int) bool {
		return newScore[i].score > newScore[j].score
	})

	res := make([]string, n)

	for i, v := range newScore {
		if i <= 2 {
			res[v.index] = desc[i]
		} else {
			res[v.index] = strconv.Itoa(i + 1)
		}
	}

	return res
}
