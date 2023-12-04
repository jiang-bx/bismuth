export function fractionToDecimal(
    numerator: number,
    denominator: number
): string {
    let res = "";

    if (numerator % denominator === 0) {
        return (numerator / denominator).toString();
    }

    if (numerator * denominator < 0) {
        res += "-";
    }

    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

    res += Math.floor(numerator / denominator) + ".";

    numerator %= denominator;

    const map = new Map();
    while (numerator !== 0) {
        map.set(numerator, res.length);
        numerator *= 10;
        res += Math.floor(numerator / denominator);
        numerator %= denominator;

        if (map.get(numerator)) {
            const u = map.get(numerator);
            return res.substring(0, u) + "(" + res.substring(u) + ")";
        }
    }

    return res;
}
