/**
 * 3 <= equation.length <= 1000
 * equation 只有一个 '='.
 * 方程由绝对值在 [0, 100]  范围内且无任何前导零的整数和变量 'x' 组成
 * @param equation
 * @returns
 */

export function solveEquation(equation: string): string {
    let coefficient = 0;
    let constant = 0;
    let i = 0;
    let n = equation.length;
    let hasLeft = true;

    while (i < n) {
        if (equation[i] === "=") {
            i++;
            hasLeft = false;
            continue;
        }

        let curValue = hasLeft ? "" : "-";
        if (equation[i] === "-" || equation[i] === "+") {
            if (equation[i] === "-") {
                curValue = hasLeft ? "-" : "";
            }
            i++;
        }

        while (i < n && !isNaN(parseInt(equation[i]))) {
            curValue += equation[i];
            i++;
        }

        if (equation[i] === "x") {
            if (curValue === "-") {
                curValue = "-1";
            }
            if (curValue === "") {
                curValue = "1";
            }
            coefficient += Number(curValue);
            i++;
        } else {
            constant += Number(curValue);
        }
    }

    if (coefficient === 0 && constant === 0) {
        return "Infinite solutions";
    }

    constant = -constant;
    constant /= coefficient;

    // 判断结果是否为整数
    if (coefficient === 0 || constant % 1 !== 0) {
        return "No solution";
    }

    return "x=" + constant;
}
