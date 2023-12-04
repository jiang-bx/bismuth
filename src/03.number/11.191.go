package number_bit

import "math/bits"

func HammingWeight(n uint) int {
	// 遍历
	// count := 0
	// for i := 0; i < 32; i++ {
	// 	if (n & 1) == 1 {
	// 		count++
	// 	}
	// 	n >>= 1
	// }
	// return count

	// 优化
	// count := 0
	// for n != 0 {
	// 	n &= (n - 1)
	// 	count++
	// }
	// return count

	// api
	return bits.OnesCount32(uint32(n))
}
