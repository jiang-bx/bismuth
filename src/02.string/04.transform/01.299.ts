export function getHint(secret: string, guess: string): string {
    // secret 秘密数字
    // guess 猜的数字
    // 两个数字长度一样

    // 猜测数字中  有多少位和确切位置都猜对, 称为公牛 -> 用 A 表示
    // 猜测数字中  有多少位数字猜对, 但是位置不对, 称为 奶牛  -> 用 B 表示
    // 提示方式: xAyB

    // 公牛数量
    // 奶牛数量
    const n = secret.length;
    let bulls = 0,
        cows = 0;

    const secretArr = new Array(10).fill(0);
    const guessArr = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        } else {
            secretArr[Number(secret[i])]++;
            guessArr[Number(guess[i])]++;
        }
    }

    for (let i = 0; i < 10; i++) {
        cows += Math.min(secretArr[i], guessArr[i]);
    }

    return `${bulls}A${cows}B`;
}
