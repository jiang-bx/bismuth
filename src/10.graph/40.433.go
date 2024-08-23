package graph

func MinMutation(startGene string, endGene string, bank []string) int {
	geneList := []byte{'A', 'C', 'G', 'T'}
	bankSet := make(map[string]bool)

	for _, v := range bank {
		bankSet[v] = true
	}

	if !bankSet[endGene] {
		return -1
	}

	queue := []string{startGene}
	count := 1

	for len(queue) > 0 {
		size := len(queue)
		for i := 0; i < size; i++ {
			curGene := queue[0]
			queue = queue[1:]

			for j := 0; j < 8; j++ {
				for k := 0; k < 4; k++ {
					if geneList[k] == curGene[j] {
						continue
					}

					newGene := curGene[0:j] + string(geneList[k]) + curGene[j+1:]

					if newGene == endGene {
						return count
					}

					if bankSet[newGene] {
						bankSet[newGene] = false
						queue = append(queue, newGene)
					}
				}
			}

		}
		count++
	}

	return -1
}
