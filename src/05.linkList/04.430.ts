class Node {
    val: number;
    prev: Node | null;
    next: Node | null;
    child: Node | null;
    constructor(val?: number, prev?: Node, next?: Node, child?: Node) {
        this.val = val === undefined ? 0 : val;
        this.prev = prev === undefined ? null : prev;
        this.next = next === undefined ? null : next;
        this.child = child === undefined ? null : child;
    }
}

export function createNodeByList(list: (number | null)[]) {
    let head: Node | null = null;
    let lastNode: Node | null = null;
    let level = 0;
    let levelIndex = 0;
    let hasLevel = false;
    const curLevelList: Node[][] = [];

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (item) {
            const curNode = new Node(item);
            if (!head) {
                head = curNode;
            } else {
                if (lastNode !== null) {
                    lastNode.next = curNode;
                    curNode.prev = lastNode;
                }
            }

            lastNode = curNode;

            if (!curLevelList[level]) {
                curLevelList[level] = [curNode];
            } else {
                curLevelList[level].push(curNode);
                levelIndex++;
            }
            if (level > 0 && !hasLevel) {
                curLevelList[level - 1][levelIndex].child = curNode;
                hasLevel = true;
            }
        } else {
            if (list[i - 1] !== null) {
                // 开始换行
                level++;
                levelIndex = 0;
                hasLevel = false;
            } else {
                //
                levelIndex++;
            }
            lastNode = null;
        }
    }

    return head;
}

export function flatten(head: Node | null): Node | null {
    // const newHead = new Node(-1, null, head);
    // let curNode = newHead;
    // let lastStack: Node[] = [];

    // const eachNextNode = () => {
    //     while (curNode.next || curNode.child) {
    //         if (curNode.child) {
    //             if (curNode.next) {
    //                 lastStack.push(curNode.next);
    //             }
    //             curNode.next = curNode.child;
    //             curNode.child.prev = curNode;
    //             curNode.child = null;
    //         } else {
    //             curNode = curNode.next;
    //         }
    //     }
    // };

    // eachNextNode();

    // let lastNode = lastStack.pop();

    // while (lastNode) {
    //     curNode.next = lastNode;
    //     lastNode.prev = curNode;
    //     curNode = lastNode;
    //     eachNextNode();
    //     lastNode = lastStack.pop();
    // }

    // return newHead.next;

    // 迭代(广度遍历)
    // let curNode = head;
    // while (curNode) {
    //     if (curNode.child) {
    //         let next = curNode.next;
    //         let child = curNode.child;

    //         curNode.next = child;
    //         curNode.child.prev = curNode;
    //         curNode.child = null;

    //         // 先遍历子链, 找到最后一个节点
    //         while (child.next) {
    //             child = child.next;
    //         }

    //         // 将最后一个节点衔接到上层
    //         child.next = next;
    //         if (next) {
    //             next.prev = child;
    //         }
    //     }
    //     curNode = curNode.next;
    // }

    // return head;

    // 递归(深度遍历)
    let prev: Node | null = null
    const dfs = (h: Node) => {
        if (!h) {
            return null;
        }
        const next = h.next
        if (prev) {
            // 重新定义前后节点
            prev.next = h
            h.prev = prev
        }

        prev = h
        // 子链进入直接处理
        dfs(h.child)
        h.child = null
        dfs(next)
    };

    dfs(head)
    return head
}
