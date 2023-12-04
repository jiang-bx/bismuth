export function calculate1(s: string): number {
    const n = s.length;
    let k = 0;

    const helper = () => {
        const stack: number[] = [];
        let sign = "+";
        let num = 0;

        for (; k < n; k++) {
            if (/[0-9]/.test(s[k])) {
                num = 10 * num + (s[k].charCodeAt(0) - "0".charCodeAt(0));
            }

            if (s[k] === "(") {
                k++
                num = helper();
            }

            if ((!/[0-9]/.test(s[k]) && s[k] !== " ") || k === n - 1) {
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
                sign = s[k];
            }

            if (s[k] === ")") {
                k++
                break;
            }
        }

        let res = 0;
        for (let i = 0; i < stack.length; i++) {
            res += stack[i];
        }

        return res;
    };

    return helper();
}
