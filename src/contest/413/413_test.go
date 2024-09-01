package c_413

import (
	"fmt"
	"testing"
)

func TestResultsArray(t *testing.T) {
	res := resultsArray([][]int{
		{1, 2},
		{3, 4},
		{2, 3},
		{-3, 0},
	}, 2)

	fmt.Println(res)
}
