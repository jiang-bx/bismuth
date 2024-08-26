export function findCircleNum1(isConnected: number[][]): number {
    const n = isConnected.length;
    const used = new Array(n).fill(false);
    const dfs = (i: number) => {
        used[i] = true;
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] === 1 && !used[j]) {
                dfs(j);
            }
        }
    };
    let k = 0;

    for (let i = 0; i < n; i++) {
        if (!used[i]) {
            k++;
            dfs(i);
        }
    }

    return k;
}

export function findCircleNum(isConnected: number[][]): number {
    const n = isConnected.length;
    const uf = new UnionFind();

    for (let i = 0; i < n; i++) {
        uf.add(i);

        // 取矩阵左下方的数据
        for (let j = 0; j < i; j++) {
            if (isConnected[i][j] === 1) {
                uf.merge(i, j);
            }
        }
    }

    return uf.numOfSets;
}

class UnionFind {
    father: Map<number, number>;
    numOfSets: number;
    constructor() {
        this.father = new Map<number, number>();
        this.numOfSets = 0;
    }

    add(x: number) {
        if (!this.father.has(x)) {
            this.father.set(x, null);
            this.numOfSets++;
        }
    }

    find(x: number) {
        let root = x;

        while (this.father.get(root) !== null) {
            root = this.father.get(root);
        }

        while (x !== root) {
            let originFather = this.father.get(x);
            this.father.set(x, root);
            x = originFather;
        }

        return root;
    }

    merge(x: number, y: number) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            this.father.set(rootX, rootY);
            this.numOfSets--;
        }
    }

    isConnected(x: number, y: number) {
        return this.find(x) === this.find(y);
    }
}
