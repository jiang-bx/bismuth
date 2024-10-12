export function rangeBitwiseAnd1(left: number, right: number): number {
    let zeros = 0;
    while (right > left) {
        zeros++;
        left >>>= 1;
        right >>>= 1;
    }

    return left << zeros;
}

export function rangeBitwiseAnd(left: number, right: number): number {
    while (right > left) {
        right = right & (right - 1);
    }

    return right;
}
