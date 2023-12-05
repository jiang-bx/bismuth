export function findKthLargest(nums: number[], k: number): number {
    /**
    // 从大到小排序, 返回第 k - 1 个元素
    nums.sort((a, b) => b - a);
    return nums[k - 1];
     */

    //-------------------------------------------
    /**
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
     */

    // 利用快速排序, 将元素排好
    function swap(arr: number[], i: number, j: number) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function partition(arr: number[], left: number, right: number): number {
        const datum =
            arr[Math.floor(Math.random() * (right - left + 1) + left)];
        let i = left,
            j = right;

        while (i <= j) {
            while (arr[i] < datum) {
                i++;
            }
            while (arr[j] > datum) {
                j--;
            }

            // 交换
            if (i <= j) {
                swap(arr, i, j);
                i += 1;
                j -= 1;
            }
        }

        return i;
    }

    function qSort(arr: number[], left: number, right: number) {
        let index = -1;
        if (left < right) {
            // 划分数组
            index = partition(arr, left, right);
            if (left < index - 1) {
                qSort(arr, left, index - 1);
            }
            if (index < right) {
                qSort(arr, index, right);
            }
        }
    }

    function quickSort(arr: number[]) {
        qSort(arr, 0, arr.length - 1);
    }

    quickSort(nums);

    return nums[nums.length - k];
}
