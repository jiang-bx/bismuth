import { getRow, getRow1, getRow2, getRow3 } from '../02.119.js'

const testFunc = getRow;

describe('杨辉三角II, 暴力解法 测试用例', () => {
    
    test('getRow should return [1, 3, 3, 1]', () => {
        expect(testFunc(3)).toStrictEqual([1, 3, 3, 1]);
    });

    test('getRow1 should return [1, 3, 3, 1]', () => {
        expect(getRow1(3)).toStrictEqual([1, 3, 3, 1]);
    });

    test('getRow2 should return [1, 3, 3, 1]', () => {
        expect(getRow2(3)).toStrictEqual([1, 3, 3, 1]);
    });

    test('getRow3 should return [1, 3, 3, 1]', () => {
        expect(getRow3(3)).toStrictEqual([1, 3, 3, 1]);
    });
});
