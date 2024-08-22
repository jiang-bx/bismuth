export function findLadders(
    beginWord: string,
    endWord: string,
    wordList: string[]
): string[][] {
    const wordSet = new Set(wordList);

    if (!wordSet.has(endWord)) {
        return [];
    }

    wordSet.delete(beginWord);

    // 广度优先遍历构建图, key: 单词, value: 在广度优先遍历的第几层
    const steps = new Map<string, number>();
    steps.set(beginWord, 0);

    // 记录单词是由那些单词扩展而来
    const from = new Map<string, Set<string>>();

    // 开始广搜
    let step = 0;
    let found = false;

    const queue: string[] = [beginWord];

    while (queue.length) {
        step++;
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const curWord = queue.shift();

            for (let j = 0; j < curWord.length; j++) {
                for (let k = "a".charCodeAt(0); k <= "z".charCodeAt(0); k++) {
                    const nextWord =
                        curWord.slice(0, j) +
                        String.fromCharCode(k) +
                        curWord.slice(j + 1);

                    if (steps.has(nextWord) && steps.get(nextWord) === step) {
                        from.get(nextWord).add(curWord);
                    }

                    if (!wordSet.has(nextWord)) {
                        continue;
                    }

                    wordSet.delete(nextWord);

                    queue.push(nextWord);

                    from.set(nextWord, new Set());
                    from.get(nextWord).add(curWord);
                    steps.set(nextWord, step);

                    if (nextWord === endWord) {
                        found = true;
                    }
                }
            }
        }

        if (found) {
            break;
        }
    }

    const ans: string[][] = [];

    if (found) {
        const onPath: string[] = [];
        onPath.push(endWord);
        const dfs = (curWord: string) => {
            if (curWord === beginWord) {
                ans.push([...onPath]);
                return;
            }

            for (const val of from.get(curWord)) {
                onPath.unshift(val);
                dfs(val);
                onPath.shift();
            }
        };

        dfs(endWord);
    }

    return ans;
}
