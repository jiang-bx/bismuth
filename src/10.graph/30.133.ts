export class _Node {
    val: number;
    neighbors: _Node[];
    constructor(val?: number, neighbors?: _Node[]) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

// DFS
export function cloneGraph1(node: _Node | null): _Node | null {
    const m = new Map<number, _Node>();
    const dfs = (cur: _Node | null): _Node | null => {
        if (cur === null) {
            return null;
        }

        if (m.has(cur.val)) {
            return m.get(cur.val);
        }

        const copyNode = new _Node(cur.val);

        m.set(cur.val, copyNode);

        cur.neighbors.forEach((item) => {
            copyNode.neighbors.push(dfs(item));
        });

        return copyNode;
    };
    return dfs(node);
}

// BFS
export function cloneGraph(node: _Node | null): _Node | null {
    if (node == null) {
        return null;
    }

    // value 是 clone 后的值
    const m = new Map<number, _Node>();
    const stack: _Node[] = [node];
    m.set(node.val, new _Node(node.val));

    while (stack.length) {
        const cur = stack.pop();

        cur.neighbors.forEach((item) => {
            if (!m.has(item.val)) {
                m.set(item.val, new _Node(item.val));
                stack.push(item);
            }
            m.get(cur.val).neighbors.push(m.get(item.val));
        });
    }

    return m.get(node.val);
}
