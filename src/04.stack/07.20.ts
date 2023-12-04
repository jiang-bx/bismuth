export function isValid(s: string): boolean {
    const stack: string[] = [];
    const map = {
        "}": "{",
        ")": "(",
        "]": "[",
    };

    for (let i = 0, n = s.length; i < n; i++) {
        if (s[i] === "[" || s[i] === "(" || s[i] === "{") {
            stack.push(s[i]);
        } else {
            if (stack.length && stack[stack.length - 1] === map[s[i]]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return !stack.length;
}
