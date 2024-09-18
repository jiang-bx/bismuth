package array_greedy

func FindClosestElements1(arr []int, k int, x int) []int {
	n := len(arr)
	l := 0
	r := n - 1
	removeNums := n - k

	for removeNums > 0 {
		if x-arr[l] <= arr[r]-x {
			r--
		} else {
			l++
		}
		removeNums--
	}

	ans := []int{}

	for i := l; i < l+k; i++ {
		ans = append(ans, arr[i])
	}

	return ans
}

func FindClosestElements(arr []int, k int, x int) []int {
	n := len(arr)
	l := 0
	r := n - k

	for l < r {
		mid := l + (r-l)/2
		if x-arr[mid] <= arr[mid+k]-x {
			r = mid
		} else {
			l = mid + 1
		}
	}

	ans := []int{}

	for i := l; i < l+k; i++ {
		ans = append(ans, arr[i])
	}

	return ans
}
