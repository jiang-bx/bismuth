package array_greedy

func PredictPartyVictory(senate string) string {
	arr := []byte(senate)
	D := true
	R := true

	// 标记变量,
	// 当 person > 0 时, R 可以淘汰 D,
	// 当 person < 0 时, D 可以淘汰 R,
	person := 0

	for R && D {
		R = false
		D = false

		for i, v := range arr {
			if v == 'R' {
				R = true
				// 该 R 是否可以被淘汰
				if person < 0 {
					arr[i] = '0'
				}

				person++
			} else if v == 'D' {
				D = true
				// 该 D 是否可以被淘汰
				if person > 0 {
					arr[i] = '0'
				}
				person--
			}

		}
	}

	if person > 0 {
		return "Radiant"
	}

	return "Dire"
}
