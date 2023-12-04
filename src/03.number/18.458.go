package number_bit

import "math"

func PoorPigs(buckets, minutesToDie, minutesToTest int) int {
	states := (minutesToTest / minutesToDie) + 1
	pigs := math.Log(float64(buckets)) / math.Log(float64(states))
	pigs -= 1e-5
	return int(math.Ceil(pigs))
}
