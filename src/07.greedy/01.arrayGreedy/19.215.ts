export function findKthLargest(nums: number[], k: number): number {
    /**
    // 从大到小排序, 返回第 k - 1 个元素
    nums.sort((a, b) => b - a);
    return nums[k - 1];
     */

    // 构建 前 k 个元素的小堆顶

    // 构建小顶堆
    function buildHeap(arr: number[], l: number) {
        if (l === 1) {
            return;
        }

        for (let i = Math.floor(l / 2); i >= 1; i--) {
            heapfiy(arr, l, i);
        }
    }

    function heapfiy(arr: number[], k: number, i: number) {
        while (true) {
            let minIndex = i;
            if (2 * i <= k && arr[2 * i] < arr[i]) {
                minIndex = 2 * i;
            }

            if (2 * i + 1 <= k && arr[2 * i + 1] < arr[minIndex]) {
                minIndex = 2 * i + 1;
            }

            if (minIndex !== i) {
                swap(arr, i, minIndex);
                i = minIndex;
            } else {
                break;
            }
        }
    }

    function swap(arr: number[], i: number, j: number) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    const heap = [,];
    let i = 0;
    while (i < k) {
        heap.push(nums[i++]);
    }

    buildHeap(heap, k);

    for (; i < nums.length; i++) {
        if (heap[1] < nums[i]) {
            heap[1] = nums[i];
            heapfiy(heap, k, 1);
        }
    }

    return heap[1];
}
