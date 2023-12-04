package transform

import "strconv"

// secret 和 guess 仅由数字组成
func GetHint(secret string, guess string) string {
	bulls := 0
	cows := 0
	bullsArr := make([]int, 10)
	cowsArr := make([]int, 10)
	min := func(a, b int) int {
		if a < b {
			return a
		}
		return b
	}

	for i := range secret {
		if secret[i] == guess[i] {
			bulls++
		} else {
			bullsArr[secret[i]-'0']++
			cowsArr[guess[i]-'0']++
		}

	}

	for i := 0; i < 10; i++ {
		cows += min(bullsArr[i], cowsArr[i])
	}

	return strconv.Itoa(bulls) + "A" + strconv.Itoa(cows) + "B"
}
