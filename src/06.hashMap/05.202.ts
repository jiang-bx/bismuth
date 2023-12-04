export function isHappy(n: number): boolean {
    const getNext = (num: number) => {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            num = Math.floor(num / 10);
            sum += digit * digit;
        }
        return sum;
    };

    const set = new Set<number>();
    while (n != 1 && !set.has(n)) {
        set.add(n);
        n = getNext(n);
    }
    return n === 1;
}
