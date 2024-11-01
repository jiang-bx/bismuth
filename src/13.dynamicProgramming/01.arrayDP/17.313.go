package arraydp

import "math"

func NthSuperUglyNumber(n int, primes []int) int {
	pList := make([]int, len(primes))
	dp := make([]int, n)
	dp[0] = 1

	for i := 1; i < n; i++ {
		min := math.MaxInt
		for j, v := range pList {
			val := dp[v] * primes[j]
			if min > val {
				min = val
			}
		}

		dp[i] = min

		for j, v := range pList {
			if dp[v]*primes[j] == dp[i] {
				pList[j]++
			}
		}
	}

	return dp[n-1]
}
