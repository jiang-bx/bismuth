/**
 * 给定一个二维的甲板， 请计算其中有多少艘战舰。
 * 战舰用 'X'表示，空位用 '.'表示。
 * 你需要遵守以下规则：
 *
 * 给你一个有效的甲板，仅由战舰或者空位组成。
 * 战舰只能水平或者垂直放置。
 * 换句话说,战舰只能由 1xN (1 行, N 列)组成，或者 Nx1 (N 行, 1 列)组成，
 * 其中N可以是任意大小。
 * 两艘战舰之间至少有一个水平或垂直的空位分隔 - 即没有相邻的战舰。
 *
 * 示例 :
 * X..X
 * ...X
 * ...X
 *
 * 在上面的甲板中有2艘战舰。
 *
 * 无效样例 :
 * ...X
 * XXXX
 * ...X
 *
 * 你不会收到这样的无效甲板 -
 * 因为战舰之间至少会有一个空位将它们分开。
 *
 * 进阶:
 * 你可以用一次扫描算法，只使用O(1)额外空间，并且不修改甲板的值来解决这个问题吗？
 */

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
    let i = 0,
        j = 0,
        len = board.length,
        lenJ = 0,
        count = 0;

    const battleMap = {};

    const findBattle = (i, j) => {
        const jLen = board[i].length;

        if (i > len || j > jLen) {
            return;
        }

        battleMap[`${i}-${j}`] = 1;

        if (board[i + 1] && board[i + 1][j] === 'X') {
            // 下
            findBattle(i + 1, j);
        } else if (board[i][j + 1] === 'X') {
            // 右
            findBattle(i, j + 1);
        } else {
            // 左右都为 .
            count++;
        }
    };

    for (; i < len; i++) {
        j = 0;
        lenJ = board[i].length;
        for (; j < lenJ; j++) {
            if (!battleMap[`${i}-${j}`] && board[i][j] === "X") {
                findBattle(i, j);
            }
        }
    }

    return count;
};

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships1 = function (board) {
    let count = 0;

    for (let i = 0, lenI = board.length; i < lenI; i++) {
        for (let j = 0, lenJ = board[i].length; j < lenJ; j++) {
            if (board[i][j] === '.') {
                continue;
            }

            // 左侧为 X 跳过, 当做战舰的中间部分
            if (j > 0 && board[i][j - 1] === 'X') {
                continue;
            }

            // 丄侧为 X 跳过, 当做战舰的中间部分
            if (i > 0 && board[i - 1][j] === 'X') {
                continue;
            }

            count++;
        }
    }

    return count;
};

export { countBattleships, countBattleships1 };
