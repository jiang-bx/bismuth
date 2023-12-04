class Node {
    val: number;
    next: Node | null;
    random: Node | null;
    constructor(val?: number, next?: Node, random?: Node) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.random = random === undefined ? null : random;
    }
}

export function copyRandomList(head: Node | null): Node | null {
    const newHead = new Node(-1, head, null);
    let curNode = newHead;

    let copyHead: Node | null = null;

    const hashMap = new Map<Node, Node>();

    while (curNode.next) {
        const next = curNode.next;
        curNode = next;

        // 复制节点
        const newNextNode = new Node(next.val, null, null);

        hashMap.set(next, newNextNode);
    }

    curNode = newHead;

    while (curNode.next) {
        const next = curNode.next;
        curNode = next;

        const copyNode = hashMap.get(next);

        if (next.next) {
            copyNode.next = hashMap.get(next.next);
        }

        if (next.random) {
            copyNode.random = hashMap.get(next.random);
        }

        if (!copyHead) {
            copyHead = copyNode;
        }
    }

    return copyHead;
}
