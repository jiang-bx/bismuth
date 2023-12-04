export function evalRPN(tokens: string[]): number {
    // const stack: number[] = [];

    // for (let i = 0; i < tokens.length; i++) {
    //     if (!isNaN(Number(tokens[i]))) {
    //         stack.push(Number(tokens[i]));
    //     } else {
    //         let num1 = stack.pop();
    //         let num2 = stack.pop();
    //         let res = 0;

    //         switch (tokens[i]) {
    //             case "+":
    //                 res = num2 + num1;
    //                 break;
    //             case "-":
    //                 res = num2 - num1;
    //                 break;
    //             case "*":
    //                 res = num2 * num1;
    //                 break;
    //             case "/":
    //                 res = Math.trunc(num2 / num1);
    //                 break;
    //         }

    //         stack.push(res);
    //     }
    // }

    // return stack[0];

    const stack: number[] = [];
    const calcObj: { [key in string]: (a: number, b: number) => number } = {
        "+": (a: number, b: number) => b + a,
        "-": (a: number, b: number) => b - a,
        "*": (a: number, b: number) => b * a,
        "/": (a: number, b: number) => Math.trunc(b / a),
    };

    for (let i = 0; i < tokens.length; i++) {
        if (calcObj[tokens[i]]) {
            stack.push(calcObj[tokens[i]](stack.pop(), stack.pop()));
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }

    return stack.pop();
}
