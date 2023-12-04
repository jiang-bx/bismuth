package array_greedy

func CanPlaceFlowers(flowerbed []int, n int) bool {
	// 贪心思想
	l := len(flowerbed)
	for i := 0; i < l && n > 0; i++ {
		if flowerbed[i] == 0 && (i+1 == l || flowerbed[i+1] == 0) && (i == 0 || flowerbed[i-1] == 0) {
			flowerbed[i] = 1
			n--
		}
	}
	return n <= 0
}
