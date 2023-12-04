package array_greedy

import "math"

func MaxProfit1(prices []int) int {
	min := math.MaxInt
	profit := 0
	for _, v := range prices {
		// 找到买入价格
		if min > v {
			min = v
		}

		// 找到右侧卖出价格,
		if v > min {
			profit += v - min
			min = v
		}
	}
	return profit
}
