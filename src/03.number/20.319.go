package number_bit

import "math"

func BulbSwitch(n int) int {
	return int(math.Sqrt(float64(n)))
}
