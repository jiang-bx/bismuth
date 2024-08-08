export function judgePoint24(cards: number[]): boolean {
    if (cards.length === 1) {
        // 1e-9 表示十亿分之一
        return Math.abs(cards[0] - 24) < 1e-9;
    }

    for (let i = 0; i < cards.length; i++) {
        for (let j = i + 1; j < cards.length; j++) {
            const a = cards[i];
            const b = cards[j];

            const newCards = [];

            for (let k = 0; k < cards.length; k++) {
                if (k !== i && k !== j) {
                    newCards.push(cards[k]);
                }
            }

            let isValid =
                judgePoint24([...newCards, a + b]) ||
                judgePoint24([...newCards, a - b]) ||
                judgePoint24([...newCards, b - a]) ||
                judgePoint24([...newCards, a * b]);

            if (a !== 0) {
                isValid = isValid || judgePoint24([...newCards, a / b]);
            }

            if (b !== 0) {
                isValid = isValid || judgePoint24([...newCards, b / a]);
            }

            if (isValid) {
                return true;
            }
        }
    }

    return false;
}
