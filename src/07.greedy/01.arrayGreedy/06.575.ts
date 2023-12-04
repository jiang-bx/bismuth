export function distributeCandies(candyType: number[]): number {
    const map = new Map<number, boolean>();
    const lenght = candyType.length;
    let count = 0;

    for (let i = 0; i < lenght; i++) {
        if (!map.has(candyType[i])) {
            map.set(candyType[i], true);
            count++;
        }
    }

    // 最多可以吃的糖
    const n = lenght / 2;

    return n < count ? n : count;
}
