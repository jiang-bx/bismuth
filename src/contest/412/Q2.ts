export function countPairs(nums: number[]): number {
    const isOk = (x: number, y: number) => {
        const xs = x.toString().padStart(7, "0").split("");
        const ys = y.toString().padStart(7, "0").split("");
        const diffs: number[] = [];

        for (let i = 0; i < 7; i++) {
            if (xs[i] !== ys[i]) {
                diffs.push(i);
            }
        }

        if (diffs.length === 0) {
            return true;
        }

        if (diffs.length !== 2) {
            return false;
        }

        return xs[diffs[0]] === ys[diffs[1]] && xs[diffs[1]] === ys[diffs[0]];
    };
    const n = nums.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isOk(nums[i], nums[j])) {
                count++;
            }
        }
    }
    return count;
}

export function countPairs1(nums: number[]): number {
    const getGen = (num: number) => {
        const variants = new Set<number>();
        const numStr = num + "";

        variants.add(num);

        for (let i = 0; i < numStr.length; i++) {
            for (let j = i + 1; j < numStr.length; j++) {
                const numStrArr = numStr.split("");
                const temp = numStrArr[i];
                numStrArr[i] = numStrArr[j];
                numStrArr[j] = temp;

                variants.add(Number(numStrArr.join("")));
            }
        }

        return variants;
    };

    let k = 0;
    const n = nums.length;
    const map = new Map<number, number>();
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        const variant = getGen(num);
        for (const v of variant) {
            k += map.get(v) || 0;
        }
        map.set(num, (map.get(num) || 0) + 1);
    }

    return k;
}
