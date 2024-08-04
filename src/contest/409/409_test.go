package c409

import (
	"fmt"
	"testing"
)

func TestShortestDistanceAfterQueries(t *testing.T) {
	val1 := shortestDistanceAfterQueries(5, [][]int{
		{2, 4},
		{0, 2},
		{0, 4},
	})

	fmt.Println(val1)

	val2 := shortestDistanceAfterQueries(4, [][]int{
		{0, 3},
		{0, 2},
	})

	fmt.Println(val2)
}
