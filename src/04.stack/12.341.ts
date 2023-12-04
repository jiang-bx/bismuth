/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 *
 * };
 */

export class NestedInteger {
    value: NestedInteger[] | number;
    constructor(value?: number) {
        if (value !== undefined) {
            this.value = value;
        } else {
            this.value = [];
        }
    }
    isInteger(): boolean {
        return typeof this.value === "number";
    }
    getInteger(): number | null {
        return typeof this.value === "number" ? this.value : null;
    }
    add(elem: NestedInteger) {
        if (typeof this.value !== "number") {
            this.value.push(elem);
        }
    }
    getList(): NestedInteger[] {
        return typeof this.value === "number" ? [] : this.value;
    }
}

// export class NestedIterator {
//     stack: number[];
//     constructor(nestedList: NestedInteger[]) {
//         this.stack = [];
//         const getNumber = (item: NestedInteger) => {
//             if (item.isInteger()) {
//                 this.stack.push(item.getInteger());
//             } else {
//                 const list = item.getList();
//                 for (let i = list.length - 1; i >= 0; i--) {
//                     getNumber(list[i]);
//                 }
//             }
//         };
//         // 入栈
//         for (let i = nestedList.length - 1; i >= 0; i--) {
//             getNumber(nestedList[i]);
//         }
//     }

//     hasNext(): boolean {
//         return this.stack.length !== 0;
//     }

//     next(): number {
//         return this.stack.pop();
//     }
// }

export class NestedIterator {
    nestedList: NestedInteger[];
    constructor(nestedList: NestedInteger[]) {
        this.nestedList = nestedList;
    }

    hasNext(): boolean {
        if (!this.nestedList.length) {
            return false;
        }

        const first = this.nestedList[0];
        if (first.isInteger()) {
            return true
        } else {
            this.nestedList.shift();
            this.nestedList.unshift(...first.getList());
            return this.hasNext();
        }
    }

    next(): number {
        return this.nestedList.shift().getInteger();
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
