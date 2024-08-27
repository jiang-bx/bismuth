export function findRedundantDirectedConnection(edges: number[][]): number[] {
    const n = edges.length;
    const father = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        father[i] = i;
    }

    const find = (x: number) => {
        while (father[x] !== x) {
            x = father[x];
        }
        return x;
    };

    for (let i = 0; i < n; i++) {
        const x1 = find(edges[i][0]);
        const x2 = find(edges[i][1]);

        if (x1 === x2) {
            return edges[i];
        } else {
            father[x1] = x2;
        }
    }

    return [0, 0];
}
