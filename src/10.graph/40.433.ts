export function minMutation(
    startGene: string,
    endGene: string,
    bank: string[]
): number {
    const bankSet = new Set(bank);
    const geneList = ["A", "C", "G", "T"];

    if (!bankSet.has(endGene)) {
        return -1;
    }

    const queue: string[] = [startGene];
    let count = 1;
    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const curGene = queue.shift();

            for (let j = 0; j < curGene.length; j++) {
                for (let k = 0; k < geneList.length; k++) {
                    if (geneList[k] === curGene[j]) {
                        continue;
                    }
                    const newGene =
                        curGene.slice(0, j) +
                        geneList[k] +
                        curGene.slice(j + 1);

                    if (newGene === endGene) {
                        return count;
                    }

                    if (bankSet.has(newGene)) {
                        bankSet.delete(newGene);
                        queue.push(newGene);
                    }
                }
            }
        }

        count++;
    }

    return -1;
}
