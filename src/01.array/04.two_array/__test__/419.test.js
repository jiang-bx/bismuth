import { countBattleships, countBattleships1 } from '../05.419.js'

const testFunc = countBattleships;

describe('寻找战舰 测试用例', () => {

    test('[["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]] should return 2', () => {
        expect(testFunc( [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]] )).toBe(2);
    });

    test('[["X",".",".","X"],[".",".",".","X"],["X","X",".","X"]] should return 3', () => {
        expect(testFunc( [["X",".",".","X"],[".",".",".","X"],["X","X",".","X"]] )).toBe(3);
    });
});

describe('寻找战舰 countBattleships1 测试用例', () => {

    test('[["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]] should return 2', () => {
        expect(countBattleships1( [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]] )).toBe(2);
    });

    test('[["X",".",".","X"],[".",".",".","X"],["X","X",".","X"]] should return 3', () => {
        expect(countBattleships1( [["X",".",".","X"],[".",".",".","X"],["X","X",".","X"]] )).toBe(3);
    });
});

