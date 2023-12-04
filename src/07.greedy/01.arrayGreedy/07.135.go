package array_greedy

func Candy(ratings []int) int {
	n := len(ratings)
	candyList := make([]int, n)
	i := 1
	candyList[0] = 1

	for ; i < n; i++ {
		if ratings[i] > ratings[i-1] {
			candyList[i] = candyList[i-1] + 1
		} else {
			candyList[i] = 1
		}
	}

	i = n - 2
	count := candyList[n-1]

	for ; i >= 0; i-- {
		if ratings[i] > ratings[i+1] {
			if candyList[i] < candyList[i+1]+1 {
				candyList[i] = candyList[i+1] + 1
			}
		}

		count += candyList[i]
	}

	return count
}
