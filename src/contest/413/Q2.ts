export function resultsArray1(queries: number[][], k: number): number[] {
    const arr: number[] = [];

    const res = [];

    for (const [x, y] of queries) {
        const origin = Math.abs(x) + Math.abs(y);

        insertUsingBinarySearch1(arr, origin);

        if (k - 1 < arr.length) {
            res.push(arr[k - 1]);
        } else {
            res.push(-1);
        }
    }

    return res;
}

function insertUsingBinarySearch1(arr: number[], value: number) {
    let low = 0;
    let high = arr.length;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] < value) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    arr.splice(low, 0, value);
}

export function resultsArray(queries: number[][], k: number): number[] {
    const heap = new MyHeap();
    const res = [];

    for (let i = 0; i < queries.length; i++) {
        const [x, y] = queries[i];
        const math = Math.abs(x) + Math.abs(y);

        if (heap.size() < k - 1) {
            res.push(-1);
            heap.push(math);
        } else if (heap.size() === k - 1) {
            heap.push(math);
            res.push(heap.head());
        } else {
            if (math < heap.head()) {
                heap.changeHead(math);
            }
            res.push(heap.head());
        }
    }

    return res;
}

class MyHeap {
    compare: (a: number, b: number) => boolean;
    ary: number[];
    constructor(compare = (a, b) => a > b) {
        this.compare = compare;
        this.ary = [];
    }

    changeHead(val) {
        this.ary[0] = val;
        this.down(0);
    }

    size() {
        return this.ary.length;
    }

    push(val) {
        this.ary.push(val);
        this.up(this.ary.length - 1);
    }

    head() {
        return this.ary[0];
    }

    up(index) {
        if (index) {
            const parent = (index - 1) >> 1;
            if (this.compare(this.ary[index], this.ary[parent])) {
                this.swag(index, parent);
                this.up(parent);
            }
        }
    }

    down(index) {
        const left = index * 2 + 1;
        if (left < this.ary.length) {
            let change = left;
            const right = left + 1;
            if (
                right < this.ary.length &&
                this.compare(this.ary[right], this.ary[left])
            ) {
                change = right;
            }
            if (this.compare(this.ary[change], this.ary[index])) {
                this.swag(index, change);
                this.down(change);
            }
        }
    }

    swag(a, b) {
        [this.ary[a], this.ary[b]] = [this.ary[b], this.ary[a]];
    }
}
