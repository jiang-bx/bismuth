export function reverseVowels(s: string): string {
    // 'a'、'e'、'i'、'o'、'u'

    // hello
    // eo
    // oe
    // holle

    // leetcode
    // eeoe
    // eoee
    // leotcede

    const arr = s.split("");
    const isVowels = (ch: string) => {
        return "aeiouAEIOU".includes(ch);
    };

    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if (isVowels(arr[i]) && isVowels(arr[j])) {
            // 交换位置
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
            continue;
        }

        if (!isVowels(arr[i])) {
            i++;
        }

        if (!isVowels(arr[j])) {
            j--;
        }
    }

    return arr.join("");
}
