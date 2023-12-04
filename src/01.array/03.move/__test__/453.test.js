/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-04-09 09:29:43
 */
import {minMoves, minMoves1} from '../01.453.js'

const testFunc = minMoves1;

describe('minMoves 测试用例', () => {

    test('[1,2,3]  should return 3', () => {
        expect(testFunc( [1,2,3] )).toBe(3);
    });

    test('[1, 5, 6]  should return 9', () => {
        expect(testFunc( [1, 5, 6] )).toBe(9);
    });

    test('[1, 5, 6,9]  should return 17', () => {
        expect(testFunc( [1,5,6,9] )).toBe(17);
    });

    test('[1]  should return 0', () => {
        expect(testFunc( [1] )).toBe(0);
    });

    test('[1, 1, 1]  should return 0', () => {
        expect(testFunc( [1, 1, 1] )).toBe(0);
    });

    test('[9, 1, 6, 5]  should return 17', () => {
        expect(testFunc( [9, 1, 6, 5] )).toBe(17);
    });

    test('[-1000000000,-1]  should return 999999999', () => {
        expect(testFunc( [-1000000000,-1] )).toBe(999999999);
    });
});

