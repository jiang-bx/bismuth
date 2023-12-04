export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    // 找连续三个 0
    // 前后各增加 0, 防止越界
    // flowerbed.push(0);
    // flowerbed.unshift(0);

    // for (let i = 0; i < flowerbed.length && n > 0; i++) {
    //     if (
    //         flowerbed[i - 1] == 0 &&
    //         flowerbed[i] === 0 &&
    //         flowerbed[i + 1] === 0
    //     ) {
    //         flowerbed[i] = 1;
    //         n--;
    //     }
    // }

    // return n <= 0;

    // 贪心, 能种花的地方就种花
    for (let i = 0; i < flowerbed.length && n > 0; i++) {
        if (
            flowerbed[i] === 0 &&
            (i + 1 === flowerbed.length || flowerbed[i + 1] === 0) &&
            (i === 0 || flowerbed[i - 1] === 0)
        ) {
            flowerbed[i] = 1;
            n--;
        }
    }

    return n <= 0;
}
