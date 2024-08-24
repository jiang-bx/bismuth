export function cutOffTree(forest: number[][]): number {
    const m = forest.length;
    const n = forest[0].length;
    const dirs = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];
    const list: number[][] = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (forest[i][j] > 1) {
                list.push([forest[i][j], i, j]);
            }
        }
    }

    list.sort((a, b) => {
        return a[0] - b[0];
    });

    const bfs = (x: number, y: number, eX: number, eY: number): number => {
        const usedSet = new Set();
        const queue = [[x, y]];
        usedSet.add(x + "-" + y);
        let step = 0;
        while (queue.length) {
            const size = queue.length;
            for (let i = 0; i < size; i++) {
                const [r, c] = queue.shift();

                if (r === eX && c === eY) {
                    return step;
                }

                for (let k = 0; k < 4; k++) {
                    const nR = dirs[k][0] + r;
                    const nC = dirs[k][1] + c;

                    if (nR < 0 || nR >= m || nC < 0 || nC >= n) {
                        continue;
                    }

                    if (forest[nR][nC] === 0) {
                        continue;
                    }

                    if (!usedSet.has(nR + "-" + nC)) {
                        queue.push([nR, nC]);
                        usedSet.add(nR + "-" + nC);
                    }
                }
            }

            step++;
        }

        return -1;
    };

    let startX = 0;
    let startY = 0;
    let ans = 0;

    for (let i = 0; i < list.length; i++) {
        const endX = list[i][1];
        const endY = list[i][2];

        const d = bfs(startX, startY, endX, endY);
        if (d === -1) {
            return -1;
        }

        ans += d;

        startX = endX;
        startY = endY;
    }

    return ans;
}
