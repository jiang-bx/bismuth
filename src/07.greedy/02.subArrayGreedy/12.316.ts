export function removeDuplicateLetters(s: string): string {
    const stack = [];
    const stackMap = {};
    const countMap = {};

    for (const ch of s) {
        countMap[ch] = (countMap[ch] || 0) + 1;
    }

    for (const ch of s) {
        if (!stackMap[ch]) {
            while (
                stack.length &&
                ch < stack[stack.length - 1] &&
                countMap[stack[stack.length - 1]]
            ) {
                stackMap[stack.pop()] = false;
            }

            stack.push(ch);
            stackMap[ch] = true;
        }

        countMap[ch]--;
    }

    return stack.join("");
}
