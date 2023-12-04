export function findRelativeRanks(score: number[]): string[] {
    /** 
     
    // 排序
    const n = score.length;
    const copyScore = [...score];
    copyScore.sort((a, b) => {
        return b - a;
    });

    const obj = {};
    for (let i = 0; i < n; i++) {
        if (i + 1 === 1) {
            obj[copyScore[i]] = "Gold Medal";
        } else if (i + 1 === 2) {
            obj[copyScore[i]] = "Silver Medal";
        } else if (i + 1 === 3) {
            obj[copyScore[i]] = "Bronze Medal";
        } else {
            obj[copyScore[i]] = String(i + 1);
        }
    }

    const res: string[] = [];
    for (let i = 0; i < n; i++) {
        res.push(obj[score[i]]);
    }

    return res;
    */

    const desc = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    const n = score.length;
    const newScore: {
        score: number;
        index: number;
    }[] = [];

    for (let i = 0; i < n; i++) {
        newScore.push({
            score: score[i],
            index: i,
        });
    }

    newScore.sort((a, b) => {
        return b.score - a.score;
    });

    const res: string[] = [];
    for (let i = 0; i < n; i++) {
        if (i <= 2) {
            res[newScore[i].index] = desc[i];
        } else {
            res[newScore[i].index] = String(i + 1);
        }
    }

    return res;
}
