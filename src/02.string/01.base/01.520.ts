export function detectCapitalUse(word: string): boolean {
    /** 好蠢的方法
     const n = word.length;
    const hasUppercase = (code: string): boolean => {
        return code === code.toUpperCase();
    };

    const firstCodeUpper = hasUppercase(word[0]);

    let hasAllUpper = true;
    let hasAllLower = true;
    for (let i = 1; i < n; i++) {
        let bool = hasUppercase(word[i]);
        if (!bool) {
            hasAllUpper = false;
        } else {
            hasAllLower = false;
        }
    }

    // 首字母大写
    if (firstCodeUpper) {
        // 判断剩余全部是否是大写
        // 或者剩余全部是小写
        if (hasAllLower || hasAllUpper) {
            return true;
        }
    } else {
        // 判断剩余全部是小写
        if (hasAllLower) {
            return true;
        }
    }

    return false;
     */
    /**
     // 方法二

    // 先判断是否全部为大写 或者小写
    if (
        word === word.toLocaleUpperCase() ||
        word === word.toLocaleLowerCase()
    ) {
        return true;
    }

    // 判断首字母为大写, 并且剩余的字母为小写
    if (word[0] === word[0].toLocaleUpperCase()) {
        const n = word.length;
        let hasUpperCode = false;
        for (let i = 1; i < n; i++) {
            if (word[i] === word[i].toLocaleUpperCase()) {
                hasUpperCode = true;
                break;
            }
        }

        if (!hasUpperCode) {
            return true;
        }
    }

    return false; 
     */

    /**
     // 方法三
    const n = word.length;
    let upperCodeNum = 0;

    for (let i = 0; i < n; i++) {
        if (word[i] === word[i].toLocaleUpperCase()) {
            upperCodeNum++;
        }
    }

    return (
        n === upperCodeNum ||
        upperCodeNum === 0 ||
        (upperCodeNum === 1 && word[0] === word[0].toLocaleUpperCase())
    );
     */

    // 方法四
    const n = word.length;
    let upperCodeNum = 0;
    let upperCodeIndex = -1;
    for (let i = 0; i < n; i++) {
        if (word[i] === word[i].toLocaleUpperCase()) {
            upperCodeNum++;
            upperCodeIndex = i;
        }
    }

    return (
        n === upperCodeNum ||
        upperCodeNum === 0 ||
        (upperCodeNum === 1 && upperCodeIndex === 0)
    );
}
