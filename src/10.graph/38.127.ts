export function ladderLength1(
    beginWord: string,
    endWord: string,
    wordList: string[]
): number {
    const wordMap = new Map<string, boolean>();
    wordList.forEach((item) => {
        wordMap.set(item, true);
    });

    if (!wordMap.has(endWord)) {
        return 0;
    }

    const queue = [beginWord];
    let count = 1;

    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const word = queue.shift();

            if (word == endWord) {
                return count;
            }

            for (let j = 0; j < word.length; j++) {
                for (let k = "a".charCodeAt(0); k <= "z".charCodeAt(0); k++) {
                    const newWord =
                        word.slice(0, j) +
                        String.fromCharCode(k) +
                        word.slice(j + 1);

                    if (wordMap.get(newWord)) {
                        wordMap.set(newWord, false);
                        queue.push(newWord);
                    }
                }
            }
        }
        count++;
    }

    return 0;
}

export function ladderLength(
    beginWord: string,
    endWord: string,
    wordList: string[]
): number {
    const wordMap = new Map<string, boolean>();
    wordList.forEach((item) => {
        wordMap.set(item, true);
    });

    if (!wordMap.has(endWord)) {
        return 0;
    }

    const visited = new Map<string, boolean>();
    let beginSet = new Set<string>();
    let endSet = new Set<string>();
    beginSet.add(beginWord);
    endSet.add(endWord);

    let count = 1;

    while (beginSet.size && endSet.size) {
        // 取小的
        if (beginSet.size > endSet.size) {
            const temp = endSet;
            endSet = beginSet;
            beginSet = temp;
        }

        const nextSet = new Set<string>();

        for (const word of beginSet) {
            for (let i = 0; i < word.length; i++) {
                for (let k = "a".charCodeAt(0); k <= "z".charCodeAt(0); k++) {
                    if (String.fromCharCode(k) == word[i]) {
                        continue;
                    }
                    const newWord =
                        word.slice(0, i) +
                        String.fromCharCode(k) +
                        word.slice(i + 1);

                    if (wordMap.get(newWord)) {
                        if (endSet.has(newWord)) {
                            return count + 1;
                        }

                        if (!visited.get(newWord)) {
                            nextSet.add(newWord);
                            visited.set(newWord, true);
                        }
                    }
                }
            }
        }

        beginSet = nextSet;
        count++;
    }

    return 0;
}
