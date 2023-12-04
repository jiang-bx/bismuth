export function reverseWords151(s: string): string {
    /**
     * 暴力解法
     * 1. 将字符串按空格区分为字符串数组
     * 2. 翻转字符串数组
    const reverse = (s: string[], start: number, end: number) => {
        for (let i = start, j = end; i < j; i++, j--) {
            const temp = s[i];
            s[i] = s[j];
            s[j] = temp;
        }
    };
    const n = s.length;
    const sArr: string[] = [];

    let startIndex = 0;
    let oldIndex = -1;
    let str = "";
    for (let i = 0; i < n; i++) {
        if (s[i] === " " && (i === n - 1 || s[i + 1] !== " ")) {
            oldIndex = startIndex;
            startIndex = i + 1;

            if (str) {
                sArr.push(str);
                str = "";
            }
        }

        if (oldIndex !== startIndex && s[i] !== " ") {
            str += s[i];
        }
    }

    if (str) {
        sArr.push(str);
    }

    reverse(sArr, 0, sArr.length - 1);

    return sArr.join(" ");
     */

    /**
    // 方法二: 双端队列, 将收尾空格去除, 放入数组中, 最后从数组中反向遍历
    const n = s.length;
    const sArr = [];
    let left = 0;
    let right = n - 1;

    // 去除收尾空格
    while (left <= right && s[left] === " ") {
        left++;
    }
    while (left <= right && s[right] === " ") {
        right--;
    }

    // 向数组里面添加字符
    let word = "";
    while (left <= right) {
        if (word && s[left] === " ") {
            sArr.push(word);
            word = "";
        } else if (s[left] !== " ") {
            word += s[left];
        }
        left++;
    }

    sArr.push(word);

    // 将结果翻转返回
    let res = "";
    for (let i = sArr.length - 1; i >= 0; i--) {
        res += sArr[i] + (i === 0 ? "" : " ");
    }

    return res;
     */

    const n = s.length;

    let left = 0;
    let right = n - 1;
    // 去除收尾空格
    while (left <= right && s[left] === " ") {
        left++;
    }
    while (left <= right && s[right] === " ") {
        right--;
    }

    let res = "";
    while (left <= right) {
        // 从后向前遍历
        let index = right;
        while (index >= left && s[index] !== " ") {
            index--;
        }

        // index + 1 就是出现空格的位置
        for (let i = index + 1; i <= right; i++) {
            res += s[i];
        }

        if (index > left) {
            res += " ";
        }

        // 跳过中间可能出现的空格
        while (index >= left && s[index] === " ") {
            index--;
        }
        right = index;
    }

    return res;
}
