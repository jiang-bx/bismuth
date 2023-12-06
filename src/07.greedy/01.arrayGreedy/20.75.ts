/**
 * Do not return anything, modify nums in-place instead.
 */
export function sortColors(nums: number[]): void {
    const n = nums.length;
    if (n < 2) {
        return;
    }

    let zero = 0;
    let two = n;
    let i = 0;

    while (i < two) {
        if (nums[i] === 0) {
            swap(nums, i, zero);
            zero++;
            i++;
        } else if (nums[i] === 1) {
            i++;
        } else {
            two--;
            swap(nums, i, two);
        }
    }
}

function HeapSort(arr: number[]) {
    const heap = [, ...arr];
    BuildHeap(heap, arr.length);
}

function BuildHeap(arr: number[], l: number) {
    if (l === 1) {
        return;
    }

    for (let i = Math.floor(l / 2); i >= 1; i--) {
        Heapfiy(arr, l, i);
    }
}

function Heapfiy(arr: number[], k: number, i: number) {
    while (true) {
        let minIndex = i;
        if (2 * i <= k && arr[2 * i] < arr[i]) {
            minIndex = 2 * i;
        }

        if (2 * i + 1 <= minIndex && arr[2 * i + 1] < arr[minIndex]) {
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

/**
 * 快速排序
 * @param arr
 * @param left
 * @param right
 */
function QuickSort(arr: number[]) {
    qSort(arr, 0, arr.length - 1);
}

function qSort(arr: number[], left: number, right: number) {
    let index = -1;
    if (left < right) {
        index = partition(arr, left, right);

        if (left < index - 1) {
            qSort(arr, left, index - 1);
        }

        if (index < right) {
            qSort(arr, index, right);
        }
    }
}

function partition(arr: number[], left: number, right: number) {
    const datum = arr[Math.floor(Math.random() * (right - left + 1) + left)];
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

function swap(arr: number[], i: number, j: number) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * 选择排序
 * @param nums
 */
function SelectSort(nums: number[]) {
    for (let i = 0; i < nums.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[minIndex] > nums[j]) {
                minIndex = j;
            }
        }

        const temp = nums[minIndex];
        nums[minIndex] = nums[i];
        nums[i] = temp;
    }
}
