export function findRedundantDirectedConnection(edges: number[][]): number[] {
    const n = edges.length;
    const uf = new UnionFind685(n + 1);

    const father = new Array(n + 1).fill(0);
    for (let i = 0; i < father.length; i++) {
        father[i] = i;
    }

    let conflictEdge = [];
    let cycleEdge = [];

    for (let i = 0; i < n; i++) {
        const x1 = edges[i][0];
        const x2 = edges[i][1];

        if (father[x2] !== x2) {
            conflictEdge = edges[i];
        } else {
            father[x2] = x1;

            if (uf.find(x1) === uf.find(x2)) {
                cycleEdge = edges[i];
            } else {
                uf.union(x1, x2);
            }
        }
    }

    if (!conflictEdge.length) {
        return cycleEdge;
    }

    if (cycleEdge.length) {
        return [father[conflictEdge[1]], conflictEdge[1]];
    }

    return conflictEdge;
}

class UnionFind685 {
    roots: number[];
    constructor(n: number) {
        this.roots = [];
        for (let i = 0; i < n; i++) {
            this.roots.push(i);
        }
    }

    find(x: number) {
        if (x !== this.roots[x]) {
            this.roots[x] = this.find(this.roots[x]);
        }
        return this.roots[x];
    }

    union(x: number, y: number) {
        this.roots[this.find(x)] = this.find(y);
    }
}
