import { blob } from "stream/consumers";

export function fractionAddition(expression: string): string {
    /**
    function getMaxDivisor(x: number, y: number): number {
        while (x * y) {
            //当其中一个为0时，终止循环
            if (x > y) {
                //将较大数模较小数的结果（余数）赋给较大的值，直到两个数相等
                x %= y;
            } else if (x < y) {
                y %= x;
            }
        }
        return x > y ? x : y;
    }

    expression = expression.replaceAll("-", "+-");

    const expressions = expression.split("+");

    const arr: number[][] = [];

    let maxDenominator = 1;

    for (let i = 0; i < expressions.length; i++) {
        const item = expressions[i];
        if (!item) {
            continue;
        }

        const itemNums = item.split("/");

        let molecule = parseInt(itemNums[0]);
        let denominator = parseInt(itemNums[1]);

        if (maxDenominator % denominator !== 0) {
            maxDenominator *= denominator;
        }

        arr.push([molecule, denominator]);
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] !== maxDenominator) {
            arr[i][0] = arr[i][0] * (maxDenominator / arr[i][1]);
            arr[i][1] = maxDenominator;
        }
    }

    let moleculeTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        moleculeTotal += arr[i][0];
    }

    const maxDivisor = getMaxDivisor(moleculeTotal, maxDenominator) || 1;

    return "" + moleculeTotal / maxDivisor + "/" + maxDenominator / maxDivisor;
     */

    const getMaxDivisor = (a: number, b: number): number => {
        let remainder = a % b;
        while (remainder !== 0) {
            a = b;
            b = remainder;
            remainder = a % b;
        }
        return b;
    };

    const n = expression.length;
    let index = 0;
    let molecule = 0;
    let denominator = 1;

    while (index < n) {
        // 符号
        let sign = 1;
        if (expression[index] === "-" || expression[index] === "+") {
            sign = expression[index] === "-" ? -1 : 1;
            index++;
        }

        // 分子
        let x = "";
        while (index < n && !isNaN(parseInt(expression[index]))) {
            x += expression[index];
            index++;
        }

        if (sign === -1) {
            x = "-" + x;
        }
        index++

        // 分母
        let y = "";
        while (index < n && !isNaN(parseInt(expression[index]))) {
            y += expression[index];
            index++;
        }

        // 计算结果
        molecule = Number(x) * denominator + molecule * Number(y);
        denominator *= Number(y);
    }

    if (molecule === 0) {
        return "0/1";
    }

    // 获取最大公约数
    const g = getMaxDivisor(Math.abs(molecule), denominator);

    return molecule / g + "/" + denominator / g;
}
