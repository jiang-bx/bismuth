package c_413

func resultsArray(queries [][]int, k int) []int {
	distances := make([]int, k)
	for i := range distances {
		distances[i] = -1
	}
	results := []int{}

	for i := 0; i < len(queries); i++ {
		x, y := queries[i][0], queries[i][1]
		distance := abs(x) + abs(y)

		distances = insertUsingBinarySearch(distances, distance)

		if distances[k-1] == -1 {
			results = append(results, -1)
		} else {
			results = append(results, distances[k-1])
		}
	}

	return results
}

func insertUsingBinarySearch(arr []int, value int) []int {
	low := 0
	high := len(arr)

	for low < high {
		mid := (low + high) / 2
		if arr[mid] < value {
			low = mid + 1
		} else {
			high = mid
		}
	}
	arr = append(arr[:low+1], arr[low:]...)
	arr[low] = value
	arr = arr[:len(arr)-1]

	return arr
}

func abs(n int) int {
	if n < 0 {
		return -n
	}
	return n
}
