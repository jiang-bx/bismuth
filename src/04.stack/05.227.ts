export function calculate(s: string): number {
    const n = s.length;
    const stack: number[] = [];
    let sign = "+";
    let num = 0;

    for (let i = 0; i < n; i++) {
        if (/[0-9]/.test(s[i])) {
            num = 10 * num + (s[i].charCodeAt(0) - "0".charCodeAt(0));
        }

        if ((!/[0-9]/.test(s[i]) && s[i] !== " ") || i === n - 1) {
            switch (sign) {
                case "+":
                    stack.push(num);
                    break;
                case "-":
                    stack.push(-num);
                    break;
                case "*":
                    let pre = stack.pop();
                    stack.push(pre * num);
                    break;
                case "/":
                    let pre1 = stack.pop();
                    stack.push(Math.trunc(pre1 / num));
                    break;
            }
            num = 0;
            sign = s[i];
        }
    }

    let res = 0;
    for (let i = 0; i < stack.length; i++) {
        res += stack[i];
    }

    return res;
}
