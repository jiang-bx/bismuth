export function calcEquation1(
    equations: string[][],
    values: number[],
    queries: string[][]
): number[] {
    const n = equations.length;
    const uf = new UnionFind399(n * 2);
    const map = new Map<string, number>();
    let id = 0;
    for (let i = 0; i < n; i++) {
        const [A, B] = equations[i];

        if (!map.has(A)) {
            map.set(A, id);
            id++;
        }

        if (!map.has(B)) {
            map.set(B, id);
            id++;
        }

        uf.union(map.get(A), map.get(B), values[i]);
    }

    const res = new Array(queries.length).fill(0);

    for (let i = 0; i < queries.length; i++) {
        const [A, B] = queries[i];

        if (!map.has(A) || !map.has(B)) {
            res[i] = -1.0;
        } else {
            res[i] = uf.isConnected(map.get(A), map.get(B));
        }
    }

    return res;
}

class UnionFind399 {
    parent: number[];
    weight: number[];

    constructor(n: number) {
        this.parent = new Array(n).fill(0);
        this.weight = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.weight[i] = 1;
        }
    }

    find(x: number) {
        if (x !== this.parent[x]) {
            const origin = this.parent[x];
            this.parent[x] = this.find(this.parent[x]);
            this.weight[x] *= this.weight[origin];
        }

        return this.parent[x];
    }

    union(x: number, y: number, val: number) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) {
            return;
        }

        this.parent[rootX] = rootY;

        this.weight[rootX] = (this.weight[y] * val) / this.weight[x];
    }

    isConnected(x: number, y: number) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) {
            return this.weight[x] / this.weight[y];
        } else {
            return -1.0;
        }
    }
}

export function calcEquation(
    equations: string[][],
    values: number[],
    queries: string[][]
): number[] {
    const graph = new Map<string, Map<string, number>>();

    const dfs = (a: string, b: string, visited: Set<string>) => {
        if (a === b) {
            return 1;
        }

        visited.add(a);

        for (const [next, val] of graph.get(a)) {
            if (visited.has(next)) {
                continue;
            }

            const d = dfs(next, b, visited);
            if (d !== -1) {
                return d * val;
            }
        }

        return -1;
    };

    for (let i = 0; i < equations.length; i++) {
        const [A, B] = equations[i];

        if (!graph.has(A)) {
            graph.set(A, new Map());
        }

        if (!graph.has(B)) {
            graph.set(B, new Map());
        }

        graph.get(A).set(B, values[i]);
        graph.get(B).set(A, 1 / values[i]);
    }

    const res: number[] = [];

    for (const [a, b] of queries) {
        if (!graph.has(a) || !graph.has(b)) {
            res.push(-1);
        } else {
            res.push(dfs(a, b, new Set()));
        }
    }

    return res;
}
